import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, Image, AsyncStorage } from "react-native"
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

export default function Home(){
    const [product, setProduct] = useState();

    const save =async() => {
        try {
            await AsyncStorage.setItem("MyProduct", product)
        } catch (err) {
            alert(err)
            
        }
    }

    const load = async() => {
        try {
            let product = await AsyncStorage.getItem("MyProduct");
            if(product !== null){
                setProduct(product);
            }
            
        } catch (err) {
            alert(err)
            
        }
    }

    const remove = async() => {
        try {
            await AsyncStorage.removeItem("MyProduct")
            
        } catch (err) {
            alert(err)
        }finally{
            setProduct("")
        }
    }
   useEffect(() => {
       load();
       
       
   }, [])
    return(
        <View style={styles.container}>
            <Image source ={
                require("../images/shoppinglistapp.png")}
                style ={{width:"100%", height: 100, marginTop: 64 }}
                resizeMode="contain"
                />

            <Text style = {{height:30}}>{product}</Text>
                <Text style = {styles.name}> What do you want to shop</Text>
                <TextInput style={styles.input} onChangeText={(text) =>setProduct(text)}/>
                <TouchableOpacity style={styles.button} onPress ={() => save()}>
                    <Text style= {{color:"white"}}>Okay</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={ () => remove()}>
                    <Text style= {{color:"white"}}>Remove</Text>
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
  