import App from './app';
import FlightsController from './flights/flights.controller';
import 'dotenv/config';

const app = new App([new FlightsController()], 3000);

app.listen();
