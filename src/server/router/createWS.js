/**
 * Created by therfaint- on 23/12/2018.
 */
import {mkdirSync} from '../utils/DMFS';

/**
 * 创建工作区目录
 * @param ctx
 * @returns {Promise.<void>}
 */
export default async ctx => {
  const dirname = ctx.query.dirname,
    enReg = /^[a-zA-Z]+$/;
  // RegEx, dirname only supports English
  if(!enReg.test(dirname)){
    ctx.body = {
      success: false,
      msg: 'English Only Plz'
    };
    return;
  }
  try {
    await mkdirSync(`${__ROOT__}/workspace`, dirname);
    ctx.body = {success: true, msg: 'Create WorkSpace Successed'};
  } catch (e) {
    ctx.body = {success: false, msg: 'Create WorkSpace Failed'};
  }
}
