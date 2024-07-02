import React from 'react'
import {Text, TouchableOpacity, StyleSheet } from 'react-native'


export default ButtonsCircle = ({onPress}) => {
    
    let seta = "🔍︎"
    return (
        <TouchableOpacity onPress={onPress} style={style.container}  >
                <Text style={style.title}> {seta} </Text>
        </TouchableOpacity>
    )
}


const style = StyleSheet.create({
    container: {
        
        backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        width: 50,
        height: 50,
        
    },
    title: { 
        color: "#fff",
        marginBottom:5,
        fontSize: 36 ,
        fontSize:30,
        
        

        
    }
})