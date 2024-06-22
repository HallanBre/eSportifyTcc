import React from "react";
import {SafeAreaView, StyleSheet, TextInput, Text, Image, View} from "react-native";
import Buttons from "../../components/Button/Button";
import { useState } from "react";
import {baseUrl} from "../../baseUrl/BaseUrl";

export default function LoginUsuario({navigation})  {

    //Envio formulario Login
    async function sendForm(){
        try{
        let response = await fetch(`${baseUrl}/auth/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name, 
                password: password
            })
        });

        if (!response.ok) {
            alert("Usuário ou senha incorretos")
            throw new Error(`HTTP error! status: ${response.status}`);
            
          } else {
            console.log('Success:', response.status);
            let data = await response.json();
            if(data.user.role == "ADMIN"){
                navigation.reset({
                    index: 0,
                    routes: [{name: 'CadastroQuadra'}]
                })
            }else if(data.user.role == "USER"){
                navigation.reset({
                    index: 0,
                    routes: [{name: 'ListaJogos'}]
            })
        }
            
            console.log(data);
            
          }
        } catch (error) {
          console.log('There was a problem with the fetch operation: ' + error.message);
          
        }
    }

    const handleButtonPress = () =>{
        if( name == "" || password == "" || name == null || password == null){
            alert("Preencha todos os campos")}else{
                sendForm();
            }
        }
    

    const handleTextPress = () =>{
        navigation.reset({
            index: 0,
            routes: [{name: 'CadastroUsuario'}]
        })
    }
    

    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);

    

    return(
    <SafeAreaView style={style.araeView}>
        <Text style={style.titulo}>eSport<Text style={style.secondColorTittle}>Fy</Text></Text>
        <TextInput style={style.inputText} placeholder="USERNAME" placeholderTextColor={"#7A7979"} onChangeText={text=>setName(text)}/>
        <TextInput style={style.inputText} secureTextEntry={true} placeholder="PASSWORD" placeholderTextColor={"#7A7979"} onChangeText={text=>setPassword(text)}/>
        <View style={style.buttonContainer}>
            <Buttons title="login" onPress={handleButtonPress}/>
        </View>
        <Text style={style.line}>_______________________________________________</Text>
       
            <Text style={style.noAccount} >Não tem conta? <Text style={style.registerColor} onPress={()=>handleTextPress()}>Registre-se</Text> </Text>
    </SafeAreaView>
    )
}

const style = StyleSheet.create({
    araeView: {
        backgroundColor: "#000000",
        flexGrow: 1,
        gap: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    inputText:{
        fontSize: 14,
        backgroundColor: "#cecece",
        height: 43,
        width: 330,
        zIndex: 1,
        paddingLeft: 12,
        borderRadius: 5,  
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        },
    titulo:{
        color: "#FFF",
        fontSize: 89,
        fontWeight:"bold",
        fontFamily:"Roboto",
        display: 'flex',
        flexDirection: 'center',
        alignItems: 'center',
        margin: 15
    },
    secondColorTittle:{
        color: "#f48322"
    },
    line:{
        color:"#cecece",
    },
    registerColor:{
        color : "#f48322"
    },
    noAccount:{
        marginTop: 125,
        color: "#FFF"
    },
    buttonContainer:{
        marginTop: 20,
    }

});