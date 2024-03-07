import React from 'react'
import {Text, TouchableOpacity, StyleSheet } from 'react-native'


export function Buttons(props)  {
    return (
        <TouchableOpacity  style={style.container} >
            <Text style={style.title} onPress={props.onPress}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "#47AE45",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 8,
        width: 228,
        height: 63,
        
    },
    title: { 
        color: "#2F2626",
        fontSize: 36,
        fontWeight: "500",
        textAlign: "center",
        
    }
})