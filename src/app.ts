import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import errorMiddleware from './middleware/error.middleware';

class App {
  public app: express.Application;
  public port: number;

  public constructor(controllers: any[], port: number) {
    this.app = express();
    this.port = port;

    this.connectToDatabase();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeErrorHandling();
  }

  private initializeMiddlewares(): void {
    this.app.use(bodyParser.json());
  }

  private initializeControllers(controllers: any[]): void {
    controllers.forEach(
      (controller: any): void => {
        this.app.use('/', controller.router);
      },
    );
  }

  private initializeErrorHandling(): void {
    this.app.use(errorMiddleware);
  }

  private connectToDatabase(): void {
    const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env;
    mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`, { useNewUrlParser: true });
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
