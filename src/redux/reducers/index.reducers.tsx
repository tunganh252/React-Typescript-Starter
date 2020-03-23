import { combineReducers } from 'redux'
import testReducer from './test.reducers'


const appReducer = combineReducers({
    testReducer,

})


const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
}

export default rootReducer