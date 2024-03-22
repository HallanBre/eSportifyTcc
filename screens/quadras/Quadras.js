import React from 'react'
import {Text, StyleSheet, View} from 'react-native'

export default props => {
    return (
        <View style={style.container}>
            <Text>Quadras</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexGrow: 1,	
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        
    }
})