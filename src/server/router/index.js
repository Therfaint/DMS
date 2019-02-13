/**
 * Created by therfaint- on 22/12/2018.
 */
import Router from 'koa-router';
const route = new Router();

import Logger from '../middleware/log4js';
import AuthCheck from '../middleware/authCheck';

import Login from './login';
import Downloader from './downloadHandler';
import CreateWS from './createWS';
import Render from './renderTpl';
import Upload from './handleUpload';

/**
 * Filters
 */

// Authority Check
route.use('*', AuthCheck);

/**
 * Logger
 */

// Write Request Log
route.use('*', Logger);

/**
 * CGIs
 */
// User Login
route.get('/login', Login);

// Create Workspace For Document Manager
route.get('/createWS', CreateWS);

// Resource Upload
route.post('/upload', Upload);

// Handle Download Files Request
route.get('/download/*', Downloader);

// Render EJS Template
route.get('/document/*', Render);


// fallback
// route.get('*', async (ctx, next) => {
//   console.log(ctx.path)
//   if(ctx.path === 'dms' || ctx.path === 'login'){
//     ctx.response.type = 'html';
//     ctx.response.body = fs.createReadStream('./demos/template.html');
//   }
// });

export default route;
