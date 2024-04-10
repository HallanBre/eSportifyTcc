import React from "react";
import {SafeAreaView, StyleSheet, TextInput, Text, Image, View} from "react-native";
import Buttons from "../../components/Button/Button";
import { useState } from "react";

export default function LoginUsuario({navigation})  {

    //Envio formulario Login
    async function sendForm()
    {
        let response = await fetch('http://192.168.3.16:8080/auth/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: user, 
                password: password
            })
        })
    }

    const handleButtonPress = () =>{
        sendForm();
        navigation.reset({
            index: 0,
            routes: [{name: 'ListaJogos'}]
        })
    }

    const handleTextPress = () =>{
        navigation.reset({
            index: 0,
            routes: [{name: 'CadastroUsuario'}]
        })
    }
    

    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);
    const [display, setDisplay] = useState(null);
    const [login, setLogin] = useState(null);

    

    return(
    <SafeAreaView style={style.araeView}>
        <Text style={style.titulo}>eSport<Text style={style.secondColorTittle}>fy</Text></Text>
        <TextInput style={style.inputText} placeholder="USERNAME" placeholderTextColor={"#7A7979"} onChangeText={text=>setUser(text)}/>
        <TextInput style={style.inputText} secureTextEntry={true} placeholder="PASSWORD" placeholderTextColor={"#7A7979"} onChangeText={text=>setPassword(text)}/>
        <View style={style.buttonContainer}>
            <Buttons title="login" onPress={handleButtonPress}/>
        </View>
        <Text style={style.line}>_______________________________________________</Text>
        <Image
            source={require('../../../img/google.png')}
            style={style.img}
        />
            <Text style={style.noAccount} >Não tem conta? <Text style={style.registerColor} onPress={()=>handleTextPress()}>Registre-se</Text> </Text>
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
        paddingTop: 250,
    },
    inputText:{
        fontSize: 14,
        backgroundColor: "#d9d9d9",
        height: 43,
        width: 330,
        zIndex: 1,
        paddingLeft: 12,
        borderRadius: 5,  
    },
    titulo:{
        color: "#51FC00",
        fontSize: 89,
        fontWeight:"bold",
        fontFamily:"Roboto",
        paddingBottom: 480,
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
        marginTop: 125,
        color: "#fff"
    },
    buttonContainer:{
        paddingTop: 60,
    }

});