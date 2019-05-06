import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Class } from 'babel-types';

class App {
  public app: express.Application;
  public port: number;

  public constructor(controllers: any[], port: number) {
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
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
