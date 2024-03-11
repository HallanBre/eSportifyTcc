import React from 'react'
import {Text, TouchableOpacity, StyleSheet } from 'react-native'


export default Buttons = ({title, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={style.container}  >
                <Text  style={style.title}>{title}</Text>
        </TouchableOpacity>
    )
}


const style = StyleSheet.create({
    container: {
        zIndex: 1,
        backgroundColor: "#47AE45",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        width: 228,
        height: 63,
        
    },
    title: { 
        color: "#2F2626",
        fontSize: 36,
        fontWeight: "500",
        textAlign: "center"
        

        
    }
})