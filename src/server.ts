import App from './app';
import FlightsController from './flights/flights.controller';

import * as mongoose from 'mongoose';
import 'dotenv/config';

const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env;

mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`, { useNewUrlParser: true });

const app = new App([new FlightsController()], 3000);

app.listen();
