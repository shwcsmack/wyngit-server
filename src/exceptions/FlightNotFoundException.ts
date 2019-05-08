import HttpException from './HttpException';

class FlightNotFoundException extends HttpException {
  public constructor(id: string) {
    super(404, `Flight with id ${id} not found`);
  }
}

export default FlightNotFoundException;
