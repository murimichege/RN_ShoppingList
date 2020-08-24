import React from 'react'
import { View , FlatList} from 'react-native';
import {deleteitem} from '../../Redux/Actions/ShoppingListActions'
import { ListItem, Icon } from 'react-native-elements'


const List = () => {
    return(
       <FlatList
       data={props.products}
       keyExtractor ={(item, index) => item.key.toString()}
       renderItem={(payload) =>
        <ListItem
        title={payload.item.name}
        bottomDivider
        rightIcon={<Icon
        name='delete'
        size={32}
        onPress={() => props.delete(payload.item.key)}
        
        
        />}



        />
    }
       />
    );
}
const mapStateToProps = (state) =>{
    return{
        products: state.shoppingListReducer.List
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        delete: (key) => dispatch(deleteitem(key))
    }
}
export default connect(mapDispatchToProps, mapStateToProps)(List)
