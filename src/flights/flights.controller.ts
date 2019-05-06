import { Router, Request, Response, NextFunction } from 'express';
import Controller from '../interfaces/controller.interface';
import Flight from './flight.interface';
import flightModel from './flights.model';
import FlightNotFoundException from '../exceptions/FlightNotFoundException';

class FlightsController implements Controller {
  public path: string = '/flights';
  public router: Router = Router();
  private flight = flightModel;

  public constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes(): void {
    this.router.get(this.path, this.getAllFlights);
    this.router.post(this.path, this.createAFlight);
    this.router.get(`${this.path}/:id`, this.getFlightById);
    this.router.patch(`${this.path}/:id`, this.modifyFlight);
    this.router.delete(`${this.path}/:id`, this.deleteFlight);
  }

  public getAllFlights = (req: Request, res: Response): void => {
    this.flight.find().then(
      (flights): void => {
        res.send(flights);
      },
    );
  };

  public createAFlight = (req: Request, res: Response): void => {
    const flightData: Flight = req.body;
    const createdFlight = new this.flight(flightData);
    createdFlight.save().then(
      (savedFlight): void => {
        res.send(savedFlight);
      },
    );
  };

  public getFlightById = (req: Request, res: Response, next: NextFunction): void => {
    const id = req.params.id;

    this.flight.findById(id).then(
      (flight): void => {
        if (flight) {
          res.send(flight);
        } else {
          next(new FlightNotFoundException(id));
        }
      },
    );
  };

  public modifyFlight = (req: Request, res: Response, next: NextFunction): void => {
    const id = req.params.id;
    const flightData: Flight = req.body;

    this.flight.findByIdAndUpdate(id, flightData, { new: true }).then(
      (flight): void => {
        if (flight) {
          res.send(flight);
        } else {
          next(new FlightNotFoundException(id));
        }
      },
    );
  };

  public deleteFlight = (req: Request, res: Response, next: NextFunction): void => {
    const id = req.params.id;

    this.flight.findByIdAndDelete(id).then(
      (successResponse): void => {
        if (successResponse) {
          res.send(200);
        } else {
          next(new FlightNotFoundException(id));
        }
      },
    );
  };
}

export default FlightsController;
