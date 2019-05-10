import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as mongoose from 'mongoose';
import * as cors from 'cors';
import 'reflect-metadata'; //have to use this for class-validator
import errorMiddleware from './middleware/error.middleware';
import Controller from './interfaces/controller.interface';

class App {
  public app: express.Application;
  private port: number = parseInt(process.env.PORT);

  public constructor(controllers: Controller[]) {
    this.app = express();

    this.connectToDatabase();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeErrorHandling();
  }

  private initializeMiddlewares(): void {
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
    this.app.use(cors());
  }

  private initializeControllers(controllers: Controller[]): void {
    controllers.forEach(
      (controller: Controller): void => {
        this.app.use('/', controller.router);
      },
    );
  }

  private initializeErrorHandling(): void {
    this.app.use(errorMiddleware);
  }

  private connectToDatabase(): void {
    const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env;
    const mongooseOptions = {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
    };
    mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`, mongooseOptions);
  }

  public getServer() {
    return this.app;
  }

  public listen(): void {
    this.app.listen(
      this.port,
      (): void => {
        console.log(`App listening on port ${this.port}`);
      },
    );
  }
}

export default App;
