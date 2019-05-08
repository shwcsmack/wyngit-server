import HttpException from './HttpException';

class UserWithThatEmailAlreadyExistsException extends HttpException {
  public constructor(email: string) {
    super(400, `User with email ${email} already exists`);
  }
}

export default UserWithThatEmailAlreadyExistsException;
