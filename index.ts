import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import NodeCache from "node-cache";
import booksRouter from './src/components/books/controllers/BooksController';
import { mySQLLoader } from './src/loaders/mySQLLoader';

const app = new Koa();
export const myCache = new NodeCache();
export const DBconnection = mySQLLoader()
console.log('Server started');

app.use(bodyParser());
app.use(booksRouter.routes())
app.use(booksRouter.allowedMethods())

app.listen(3000);
