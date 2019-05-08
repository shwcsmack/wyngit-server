import App from './app';
import FlightsController from './flights/flights.controller';
import AuthenticationController from './authentication/authentication.controller';
import 'dotenv/config';

const app = new App([new FlightsController(), new AuthenticationController()], 3000);

app.listen();
