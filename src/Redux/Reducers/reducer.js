import {ADD_ITEM, REMOVE_ITEM} from '../ActionTypes'


const initialstate ={
    shoppinglist : []

}

export const shoppingListReducer = (state = initialstate, action) => {
    switch(action.type){
        case ADD_ITEM:
            return{
                ...state,
                shoppinglist: state.shoppinglist.concat({
                    key: Math.random(),
                    name: action.data
                })
            }
            case REMOVE_ITEM:
                return{
                    ...state,
                    shoppinglist: state.shoppinglist.filter((item)=> item.key !== action.key)
                }
    };

    

}