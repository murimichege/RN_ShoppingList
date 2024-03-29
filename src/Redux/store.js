import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../Redux/Reducers/reducer'
const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

export default store