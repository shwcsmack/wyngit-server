import { Router, Request, Response } from 'express';
import Flight from './flight.interface';

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
  }

  public getAllFlights = (req: Request, res: Response): void => {
    res.send(this.flights);
  };

  public createAFlight = (req: Request, res: Response): void => {
    const flight: Flight = req.body;
    this.flights.push(flight);
    res.send(this.flights);
  };
}

export default FlightsController;
