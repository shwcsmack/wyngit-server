import * as mongoose from 'mongoose';
import Flight from './flight.interface';

const flightSchema = new mongoose.Schema({
  departureLocation: String,
  arrivalLocation: String,
  departureTime: String,
  arrivalTime: String,
  aircraft: String,
  operator: String,
  createdBy: String,
});

const flightModel = mongoose.model<Flight & mongoose.Document>('Flight', flightSchema);

export default flightModel;
