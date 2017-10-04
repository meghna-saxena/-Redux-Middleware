export default function ({dispatch}) {
    return next => action => {
        if (!action.payload || !action.payload.then) {
            return next(action);
        }
        console.log('We dont have a promise', action);
    };
}