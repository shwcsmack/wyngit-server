import * as bcrypt from 'bcrypt';
import { Request, Response, NextFunction, Router } from 'express';
import Controller from '../interfaces/controller.interface';
import validationMiddleware from '../middleware/validation.middleware';
import userModel from '../users/user.model';
import CreateUserDto from '../users/user.dto';
import LogInDto from './login.dto';
import UserWithThatEmailAlreadyExistsException from '../exceptions/UserWithThatEmailAlreadyExistsException';
import WrongCredentialsException from '../exceptions/WrongCredentialsException';

class AuthenticationController implements Controller {
  public path = '/auth';
  public router = Router();
  private user = userModel;
  private saltRounds = 10;

  public constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/register`, validationMiddleware(CreateUserDto), this.registration);
    this.router.post(`${this.path}/login`, validationMiddleware(LogInDto), this.logIn);
  }

  private registration = async (req: Request, res: Response, next: NextFunction) => {
    const userData: CreateUserDto = req.body;

    if (await this.user.findOne({ email: userData.email })) {
      next(new UserWithThatEmailAlreadyExistsException(userData.email));
    } else {
      const hashedPassword = await bcrypt.hash(userData.password, this.saltRounds);
      const user = await this.user.create({
        ...userData,
        password: hashedPassword,
      });
      user.password = undefined;
      res.send(user);
    }
  };

  private logIn = async (req: Request, res: Response, next: NextFunction) => {
    const logInData: LogInDto = req.body;
    const user = await this.user.findOne({ email: logInData.email });

    if (user) {
      const isPasswordMatching = await bcrypt.compare(logInData.password, user.password);

      if (isPasswordMatching) {
        user.password = undefined;
        res.send(user);
      } else {
        next(new WrongCredentialsException());
      }
    } else {
      next(new WrongCredentialsException());
    }
  };
}

export default AuthenticationController;
