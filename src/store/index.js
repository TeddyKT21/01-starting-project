
const counterReducer = (state = {count: 0}, action) =>{
    if (action.type === 'add'){
        state.count += 1;
    }
    if (action.type === 'subtract'){
        state.count -= 1;
    }
    return {...state}
}
const store = require('redux').createStore(counterReducer);

export default store;

