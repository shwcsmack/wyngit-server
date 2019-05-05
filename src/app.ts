import * as express from 'express';
// import * as bodyParser from 'body-parser';

class App {
  public app: express.Application;
  public port: number;

  public constructor(port: number) {
    this.app = express();
    this.port = port;
    this.app.get(
      '/',
      (req, res): void => {
        res.send('Hello World!');
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
