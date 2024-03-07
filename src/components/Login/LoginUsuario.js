import React from "react";
import {SafeAreaView, StyleSheet, TextInput, Text, Image, View} from "react-native";
import {Buttons} from "../Button/Button"

export default () => {
    return(
    <SafeAreaView style={style.araeView}>
        <Text style={style.titulo}>eSport<Text style={style.secondColorTittle}>fy</Text></Text>

        <TextInput style={style.inputText} placeholder="USERNAME" placeholderTextColor={"#7A7979"}/>
        <TextInput style={style.inputText} placeholder="PASSWORD" placeholderTextColor={"#7A7979"}/>
        <View style={style.buttonContainer}>
            <Buttons text="login"/>
        </View>
        <Text style={style.line}>_______________________________________________</Text>
        <Image
            source={require('../../../img/google.png')}
            style={style.img}
        />

        <Text style={style.noAccount}>Não tem conta? <Text style={style.registerColor}>Registre-se</Text></Text>
    </SafeAreaView>
    )
}

const style = StyleSheet.create({
    araeView: {
        display: 'flex', 
        backgroundColor: "#181818",
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        paddingTop: 150,
    },
    inputText:{
        fontSize: 14,
        backgroundColor: "#d9d9d9",
        height: 43,
        width: 330,
        paddingLeft: 12,
        borderRadius: 5,  
    },
    titulo:{
        color: "#51FC00",
        fontSize: 89,
        fontWeight:"bold",
        fontFamily:"Roboto",
        paddingBottom: 500,
        position: "absolute"
        
    },
    secondColorTittle:{
        color: "#fff"
    },
    line:{
        color:"#958C8C"
    },
    img:{
        height:40,
        width:40,
    },
    registerColor:{
        color : "#51FC00"
    },
    noAccount:{
        position:  "absolute",
        paddingTop: 700,
        color: "#fff"
    },
    buttonContainer:{
        paddingTop: 60,
    }

});