/**
 * Created by therfaint- on 22/12/2018.
 */
export default async (ctx, next) => {
  const isAccess = true;
  if(isAccess){
    next();
  }else{
    ctx.response.status = 403;
    ctx.body = {
      success: false,
      msg: 'Access Denied'
    }
  }
}
