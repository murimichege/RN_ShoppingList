import React from 'react'
import { View , FlatList} from 'react-native';
import {deleteitem} from '../../Redux/Actions/ShoppingListActions'
import { ListItem, Icon } from 'react-native-elements'
import {connect} from 'react-redux'

const List =(props)=> {
    return(
       <FlatList
       data={props.products}
       keyExtractor ={(item, index) => item.key.toString()}
       renderItem={(data) =>
        <ListItem
        title={data.item.name}
        bottomDivider
        rightIcon={<Icon
        name='delete'
        size={32}
        onPress={() => props.delete(data.item.key)}
        />}
        />
    }
       />
    );
}
const mapStateToProps = (state) =>{
    console.log(state)
    return{
        products: state.shoppinglist
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        delete: (key) => dispatch(deleteitem(key))
    }
}
export default connect( mapStateToProps, mapDispatchToProps)(List)
