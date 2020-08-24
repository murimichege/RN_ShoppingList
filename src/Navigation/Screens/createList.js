import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, Image, AsyncStorage } from "react-native"
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import List from './List'
import { connect } from 'react-redux'
import {additem} from  '../../Redux/Actions/ShoppingListActions'


 function Home(){
    const [product, setProduct] = useState(null);

    
       
  
    return(
        <View style={styles.container}>
            <Image source ={
                require("../images/shoppinglistapp.png")}
                style ={{width:"100%", height: 100, marginTop: 64 }}
                resizeMode="contain"
                />


            <Text style = {{height:30}}>{product}</Text>
                <Text style = {styles.name}> What do you want to shop</Text>
                <TextInput
                 value ={product}
                 style={styles.input}
                 onChangeText={(product) =>setProduct(product)}/>

                <TouchableOpacity style={styles.button}
                 onPress ={() => props.add(product)}>
                   
                    <Text style= {{color:"white"}}>Okay</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.button}
                 onPress={ () => props.navigation.navigate('List')}>
                    <Text style= {{color:"white"}}>See your ShoppingList</Text>
                </TouchableOpacity>

        </View>

    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    
    },
    name : {

        fontSize: 20,
        fontWeight: "300"
    },
    input: {
        borderWidth: 1,
        alignSelf: "stretch",
        margin: 32,
        height: 50,
        borderRadius: 6,
        paddingHorizontal: 16,
        fontWeight: "300",
        fontSize: 24
    },
     button:{
         backgroundColor: "blue",
         alignItems: "center",
         justifyContent: "center",
         alignSelf: "stretch",
         paddingVertical: 12,
         paddingHorizontal: 32,
         marginTop: 32,
         marginHorizontal: 32,
         borderRadius: 6


     }
  });

  const mapStateToProps = (state) =>{
      return{
          products: state.shoppingListReducer.List
      }
  }

  const mapDispatchToProps = (dispatch) => {
      return{
          add: (product) => dispatch(additem(product))
      }
  }

  export default connect(mapDispatchToProps, mapStateToProps)(Home)
  