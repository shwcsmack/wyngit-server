import * as bcrypt from 'bcrypt';
import { Request, Response, NextFunction, Router } from 'express';
import Controller from '../interfaces/controller.interface';
import validationMiddleware from '../middleware/validation.middleware';
import userModel from '../users/user.model';
import CreateUserDto from '../users/user.dto';
import LogInDto from './login.dto';
import WrongCredentialsException from '../exceptions/WrongCredentialsException';
import AuthenticationService from './authentication.service';

class AuthenticationController implements Controller {
  public path = '/auth';
  public router = Router();
  private user = userModel;
  public authenticationService = new AuthenticationService();

  public constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/register`, validationMiddleware(CreateUserDto), this.registration);
    this.router.post(`${this.path}/login`, validationMiddleware(LogInDto), this.logIn);
    this.router.post(`${this.path}/logout`, this.logOut);
  }

  private registration = async (req: Request, res: Response, next: NextFunction) => {
    const userData: CreateUserDto = req.body;

    try {
      const { cookie, user } = await this.authenticationService.register(userData);
      res.setHeader('Set-Cookie', [cookie]);
      res.send(user);
    } catch (error) {
      next(error);
    }
  };

  private logIn = async (req: Request, res: Response, next: NextFunction) => {
    const logInData: LogInDto = req.body;
    const user = await this.user.findOne({ email: logInData.email });

    if (user) {
      const isPasswordMatching = await bcrypt.compare(logInData.password, user.password);

      if (isPasswordMatching) {
        user.password = undefined;
        const tokenData = this.authenticationService.createToken(user);
        res.setHeader('Set-Cookie', [this.authenticationService.createCookie(tokenData)]);
        res.send(user);
      } else {
        next(new WrongCredentialsException());
      }
    } else {
      next(new WrongCredentialsException());
    }
  };

  private logOut(req: Request, res: Response, next: NextFunction) {
    res.setHeader('Set-Cookie', ['Authorization=;Max-age=0']);
    res.send(200);
  }
}

export default AuthenticationController;
