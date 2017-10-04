export default function ({dispatch}) {
    //if action doesnt has payload or .then property,
    // we can return the action to next reducer
    return next => action => {
        if (!action.payload || !action.payload.then) {
            return next(action);
        }
//when we have promise, make sure it gets resolved
        action.payload
            .then (function(response) {
                //create new action creator with old 'type' 
                //but payload of response data
                const newAction = {...action, payload:response};
                //forward new action to all the middlewares again
                dispatch(newAction);
            });s
    };
}