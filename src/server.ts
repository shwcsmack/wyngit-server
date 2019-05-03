import App from "./app";
import PostsController from "./posts/posts.controller";

const PORT = 5000;

const app = new App([new PostsController()], PORT);

app.listen();
