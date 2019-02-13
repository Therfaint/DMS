/**
 * Created by therfaint- on 22/12/2018.
 */
import Koa from 'koa';
import Cors from 'koa-cors';
import Router from './router';
import Serve from 'koa-static';
import KoaBody from 'koa-body';

import errorCatch from './middleware/errorCatch';

const app = new Koa();
const port = process.env.PORT || 8080;

app.use(errorCatch()); // try-catch the whole proccess in onion model

app.use(Serve('dist')); // static resources path
app.use(Serve('workspace')); // static resources path
app.use(Cors()); // filter origin
app.use(KoaBody({
  multipart: true,
}));// resolve post body
app.use(Router.routes()).use(Router.allowedMethods()); // middlewares

app.listen(port);
console.log(`server listening in port ${port}`);
