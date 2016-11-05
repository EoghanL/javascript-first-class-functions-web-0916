function receivesAFunction(callback){
  callback()
}

function returnsANamedFunction(){
  return function named(){
    console.log("hellllo")
  }
}

function returnsAnAnonymousFunction(){
  return function(){
    console.log('anon func')
  }
}
