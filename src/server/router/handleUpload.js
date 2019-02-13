/**
 * Created by therfaint- on 23/12/2018.
 */
import {readFile} from '../utils/DMFS';
import fs from 'fs';

export default async (ctx, next) => {
  // TODO 对上传的文件进行index，与用户和目录进行关联
  // TODO 如果有文件占位符，对ejs的内容进行替换，用户workspace & 当前目录
  // TODO 如果有变量占位符，将ejs和占位符进行关联，如果调用时入参为空，保证能返回
  // 1. get current workspace 2. copy file to workspace 3. add db map
  const file = ctx.request.files.file;
  const path = ``;
  // ws 可能路径错误 / 重名
  // 用户表，
  // 入库，静态资源schema，路径和文件名等属性
  if (file.type.indexOf('html')) {
    const suffixReg = /\.(html)$/;
    const ejsTpl = file.name.replace(suffixReg, '.ejs');
    const ws = fs.createWriteStream(`${__ROOT__}/workspace/Therfaint/${ejsTpl}`);
    const rs = fs.createReadStream(file.path);
    rs.pipe(ws);
    ctx.body = {success: true}
  }
}
