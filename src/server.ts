import App from './app';
import FlightsController from './flights/flights.controller';

const app = new App([new FlightsController()], 3000);

app.listen();
