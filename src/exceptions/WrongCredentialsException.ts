import HttpException from './HttpException';

class WrongCredentialsException extends HttpException {
  public constructor() {
    super(401, 'Bad Login');
  }
}
export default WrongCredentialsException;
