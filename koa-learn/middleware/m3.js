function m3(ctx){
  global.console.log(ctx.path,'m3')
}


module.exports=()=>{
  return async function(ctx,next){
    global.console.log('m3')
    m3(ctx)
    await next()
    global.console.log('m3')
  }
}
