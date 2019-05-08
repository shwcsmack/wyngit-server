import { Router, Request, Response, NextFunction } from 'express';
import Controller from '../interfaces/controller.interface';
import Flight from './flight.interface';
import flightModel from './flights.model';
import FlightNotFoundException from '../exceptions/FlightNotFoundException';
import CreateFlightDto from './flight.dto';
import validationMiddleware from '../middleware/validation.middleware';
import authMiddleware from '../middleware/auth.middleware';
import RequestWithUser from '../interfaces/requestWithUser.interface';

class FlightsController implements Controller {
  public path: string = '/flights';
  public router: Router = Router();
  private flight = flightModel;

  public constructor() {
    this.intializeRoutes();
  }

  private intializeRoutes(): void {
    this.router.get(this.path, this.getAllFlights);
    this.router.get(`${this.path}/:id`, this.getFlightById);
    this.router
      .all(`${this.path}\*`, authMiddleware)
      .post(this.path, validationMiddleware(CreateFlightDto), this.createAFlight)
      .patch(`${this.path}/:id`, validationMiddleware(CreateFlightDto, true), this.modifyFlight)
      .delete(`${this.path}/:id`, this.deleteFlight);
  }

  public getAllFlights = (req: Request, res: Response): void => {
    this.flight.find().then(
      (flights): void => {
        res.send(flights);
      },
    );
  };

  public createAFlight = (req: RequestWithUser, res: Response): void => {
    const flightData: Flight = req.body;
    const createdFlight = new this.flight({
      ...flightData,
      createdBy: req.user._id,
    });
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
