function m2(ctx){
  global.console.log(ctx.path,'m2')
}


module.exports=()=>{
  return async function(ctx,next){
    global.console.log('m2')
    m2(ctx)
    await next()
    global.console.log('m2')
  }
}
