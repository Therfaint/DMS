/**
 * Created by therfaint- on 22/12/2018.
 */
import fs from 'fs';

// TODO 可视化界面 用户管理的文档和文件静态资源等 可动态修改 用户可设置唯一路径
// TODO 右侧可以有文件夹树 刚创建只有一个 用户名 的工作区，可以新增子目录等操作，具体目录的映射文件可以用表格或者树的结构进行管理 数据库的话直接保存结构 mongodb

/**
 * 文件下载
 * @param ctx
 * @param next
 * @returns {Promise.<void>}
 */
export default async (ctx, next) => {
  // check db maps and check is the file exist in that path -> relative path
  const fileName = 'FMDeviceManager_v3.1.9_a4dc9ac.tar.gz'; // query from db
  const filePath = `${__ROOT__}/workspace/FMDeviceManager_v3.1.9_a4dc9ac.tar.gz`; // fileName map
  // TODO 可以考虑做降级 从workspace中找
  try {
    ctx.attachment(fileName);
    ctx.body = fs.createReadStream(filePath); // file stream
  } catch (e) {
    console.log(e);
  }
}
