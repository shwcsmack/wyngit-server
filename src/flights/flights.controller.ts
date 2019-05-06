import { Router, Request, Response } from 'express';
import Controller from '../interfaces/controller.interface';
import Flight from './flight.interface';
import flightModel from './flights.model';

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

  public getFlightById = (req: Request, res: Response): void => {
    const id = req.params.id;

    this.flight.findById(id).then(
      (flight): void => {
        res.send(flight);
      },
    );
  };

  public modifyFlight = (req: Request, res: Response): void => {
    const id = req.params.id;
    const flightData: Flight = req.body;

    this.flight.findByIdAndUpdate(id, flightData, { new: true }).then(
      (flight): void => {
        res.send(flight);
      },
    );
  };

  public deleteFlight = (req: Request, res: Response): void => {
    const id = req.params.id;

    this.flight.findByIdAndDelete(id).then(
      (successResponse): void => {
        if (successResponse) {
          res.send(200);
        } else {
          res.send(400);
        }
      },
    );
  };
}

export default FlightsController;
