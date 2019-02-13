/**
 * Created by therfaint- on 22/12/2018.
 */
import ejs from 'ejs';
import fs from 'fs';

/**
 * Render Ejs & Reture Static Resources
 * @param ctx
 * @param next
 * @returns {Promise.<void>}
 */
export default async (ctx, next) => {
  // 1. get path 2. map to ejs file 3. read params 4. render 5. return
  const placeHolder = ['title', 'userName'],
    params = ctx.query;
  // TODO 存储路径 请求路径 所属用户
  // TODO HTML存储占位符信息， 静态资源存储引用文件的路径，做匹配
  // TODO 个人工作路径 workspace/...  文档访问路径 document/...
  // if(placeHolder.length === 0){
  //
  // }
  // placeHolder.map(item=>{
  //   if()
  // });
  const realPath = ctx.path.replace('/document/', '');
  // suffix with html, render EJS
  if(ctx.path.indexOf('.html') !== -1){
    const tpl = `${realPath.replace('.html', '')}.ejs`;
    ejs.renderFile(`${__ROOT__}/workspace/${tpl}`, params, null, (err, str) => {
      ctx.body = str;
    });
  }else{
    // static resources, like image ..
    // ctx.body = fs.createReadStream(`${__ROOT__}/workspace/${realPath}`);
  }
}
