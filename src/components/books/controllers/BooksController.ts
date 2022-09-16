import Router from 'koa-router';
import Koa from 'koa';
import { SQLBooksAccessor } from '../accessors/SQLBooksAccessor';
import { DefaultBookService } from '../core/services/defaultBookService';
import { postBookBodySchema, updateBookBodySchema } from './bodyValidators/postBookBodySchema';
let booksRouter = new Router();
const bookService = new DefaultBookService(new SQLBooksAccessor())

booksRouter.get('/books', async (ctx: Koa.Context) => {
 const result = await bookService.get(ctx.request.query);
  ctx.body = result
});

booksRouter.post('/books', async (ctx: Koa.Context) => {

try {
    await postBookBodySchema.validateAsync(ctx.request.body);
    bookService.add(ctx.request.body)
    ctx.body = 'added to db'
} catch (error) {
  ctx.body = error;
}
 });

 booksRouter.patch('/books', async (ctx: Koa.Context) => {
  try {
    await updateBookBodySchema.validateAsync(ctx.request.body)
    bookService.patch(ctx.request.body)
    ctx.body = 'data altered'
  } catch (error) {
    ctx.body = error;
  }
});

export default booksRouter;
