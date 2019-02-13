/**
 * Created by therfaint- on 27/12/2018.
 */

/**
 * 异常捕获及日志
 */
export default () => async (ctx, next)=>{
  try{
    await next();
  }catch(e){
    console.log(e);
  }
}
