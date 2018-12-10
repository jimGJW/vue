function m1(ctx){
  global.console.log(ctx.path,'m1')
}


module.exports=()=>{
  return async function(ctx,next){
    global.console.log('m1')
    m1(ctx)
    await next()
    global.console.log('m1')
  }
}
