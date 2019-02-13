/**
 * Created by therfaint- on 26/12/2018.
 */
import User from '../dao/User';

export default async (ctx, next) => {
  const params = ctx.query,
    user = User.getUser();
  if(params.username === user.username && params.password === user.password){
    ctx.body = {
      success: true,
      msg: '登陆成功'
    }
  }
}
