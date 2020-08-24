import {combineReducers} from 'redux'
import shoppingListReducer from './reducer'

const rootReducer = combineReducers({
    shoppingListReducer: shoppingListReducer
})

export default rootReducer