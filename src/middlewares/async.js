export default function({dispatch}){
  return next => action => {
    if(!action.payload || !action.payload.then){
      //.then property exists on promises
      return next(action);
    }
    //make sure action payload resolves
    action.payload
      .then(function(response){
        console.log(response);
        //create new action with old action, but replace the payload
        const newAction = { ...action, payload: response.data }
        dispatch(newAction);
      })
  };
}

/*
export default function({dispatch}){
  return function(next) {
    return function(action){
      console.log(action);
      next(action);
    }
  }
}
*/
