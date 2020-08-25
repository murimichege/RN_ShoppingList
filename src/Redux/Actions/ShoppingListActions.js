import {ADD_ITEM, REMOVE_ITEM} from '../ActionTypes'

export const additem = (product) => {
    return{
        type: ADD_ITEM,
        data: product
    }
}

export const deleteitem = (key) => {
    return{
        type: REMOVE_ITEM,
        key: key
    }
}