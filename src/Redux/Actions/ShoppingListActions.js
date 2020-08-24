import {ADD_ITEM, REMOVE_ITEM} from '../ActionTypes'

export const additem = product => {
    return{
        type: ADD_ITEM,
        payload: product
    }
}

export const removeitem = key => {
    return{
        type: REMOVE_ITEM,
        payload: key
    }
}