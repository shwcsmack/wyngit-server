import * as express from 'express';
import * as bodyParser from 'body-parser'

class App {
  public app: express.Application;
  public port: number;
  
  constructor(port: number){
    this.app = express();
    this.port = port;
    this.app.get('/', (req, res) => {res.send('Hello World')});
  };

  public listen(){
    this.app.listen(this.port, () => {
      console.log(`App listening on port ${this.port}`);
    });
  };
 };

export default App;
