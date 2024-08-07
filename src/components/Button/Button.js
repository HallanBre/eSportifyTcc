import React from 'react'
import {Text, TouchableOpacity, StyleSheet } from 'react-native'


export default Buttons = ({title, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={style.container}  >
                <Text style={style.title}>{title}</Text>
        </TouchableOpacity>
    )
}


const style = StyleSheet.create({
    container: {
        zIndex: 1,
        backgroundColor: "#f48322",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        width: 345, //era 365
        height: 60,
        
    },
    title: { 
        color: "#000",
        fontSize: 36,
        fontWeight: "500",
        textAlign: "center"
    }
})