import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction, Router } from 'express';
import Controller from '../interfaces/controller.interface';
import validationMiddleware from '../middleware/validation.middleware';
import userModel from '../users/user.model';
import CreateUserDto from '../users/user.dto';
import LogInDto from './login.dto';
import UserWithThatEmailAlreadyExistsException from '../exceptions/UserWithThatEmailAlreadyExistsException';
import WrongCredentialsException from '../exceptions/WrongCredentialsException';
import TokenData from '../interfaces/TokenData.interface';
import DataStoredInToken from '../interfaces/DataStoredInToken.interface';
import User from '../users/user.interface';

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
    this.router.post(`${this.path}/logout`, this.logOut);
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
      const tokenData = this.createToken(user);
      res.setHeader('Set-Cookie', [this.createCookie(tokenData)]);
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
        const tokenData = this.createToken(user);
        res.setHeader('Set-Cookie', [this.createCookie(tokenData)]);
        res.send(user);
      } else {
        next(new WrongCredentialsException());
      }
    } else {
      next(new WrongCredentialsException());
    }
  };

  private createToken(user: User): TokenData {
    const expiresIn = 60 * 60;
    const secret = process.env.JWT_SECRET;
    const dataStoredInToken: DataStoredInToken = {
      _id: user._id,
    };

    return {
      expiresIn,
      token: jwt.sign(dataStoredInToken, secret, { expiresIn }),
    };
  }

  private createCookie(tokenData: TokenData) {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn}`;
  }

  private logOut(req: Request, res: Response, next: NextFunction) {
    res.setHeader('Set-Cookie', ['Authorization=;Max-age=0']);
    res.send(200);
  }
}

export default AuthenticationController;
