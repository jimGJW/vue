function pv(ctx){
  global.console.log(ctx.path,'pv')
}


module.exports=()=>{
  return async function(ctx,next){
    pv(ctx)
    await next()
  }
}
