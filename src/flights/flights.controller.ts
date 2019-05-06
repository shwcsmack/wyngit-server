import { Router, Request, Response } from 'express';
import Flight from './flight.interface';
import flightModel from './flights.model';

class FlightsController {
  public path: string = '/flights';
  public router: Router = Router();

  private flights: Flight[] = [
    {
      departureLocation: 'KMSP',
      arrivalLocation: 'KSNA',
      departureTime: '0100',
      arrivalTime: '0500',
      aircraft: 'C500',
      operator: 'Part 135 LLC',
    },
  ];

  public constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes(): void {
    this.router.get(this.path, this.getAllFlights);
    this.router.post(this.path, this.createAFlight);
    this.router.get(`${this.path}/:id`, this.getFlightById);
    this.router.patch(`${this.path}/:id`, this.modifyFlight);
  }

  public getAllFlights = (req: Request, res: Response): void => {
    flightModel.find().then(
      (flights): void => {
        res.send(flights);
      },
    );
    res.send(this.flights);
  };

  public createAFlight = (req: Request, res: Response): void => {
    const flightData: Flight = req.body;
    const createdFlight = new flightModel(flightData);
    createdFlight.save().then(
      (savedFlight): void => {
        res.send(savedFlight);
      },
    );
  };

  public getFlightById = (req: Request, res: Response): void => {
    const id = req.params.id;

    flightModel.findById(id).then(
      (flight): void => {
        res.send(flight);
      },
    );
  };

  public modifyFlight = (req: Request, res: Response): void => {
    const id = req.params.id;
    const flightData: Flight = req.body;

    flightModel.findByIdAndUpdate(id, flightData, { new: true }).then(
      (flight): void => {
        res.send(flight);
      },
    );
  };
}

export default FlightsController;
