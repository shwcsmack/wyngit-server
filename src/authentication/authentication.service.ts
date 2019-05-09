import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import userModel from '../users/user.model';
import CreateUserDto from '../users/user.dto';
import UserWithThatEmailAlreadyExistsException from '../exceptions/UserWithThatEmailAlreadyExistsException';
import DataStoredInToken from '../interfaces/DataStoredInToken.interface';
import TokenData from '../interfaces/TokenData.interface';
import User from '../users/user.interface';

class AuthenticationService {
  private user = userModel;
  private saltRounds = 10;

  public async register(userData: CreateUserDto) {
    if (await this.user.findOne({ email: userData.email })) {
      throw new UserWithThatEmailAlreadyExistsException(userData.email);
    } else {
      const hashedPassword = await bcrypt.hash(userData.password, this.saltRounds);
      const user = await this.user.create({
        ...userData,
        password: hashedPassword,
      });
      user.password = undefined;
      const tokenData = this.createToken(user);
      const cookie = this.createCookie(tokenData);
      return {
        cookie,
        user,
      };
    }
  }

  public createToken(user: User): TokenData {
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

  public createCookie(tokenData: TokenData) {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn}`;
  }
}

export default AuthenticationService;
