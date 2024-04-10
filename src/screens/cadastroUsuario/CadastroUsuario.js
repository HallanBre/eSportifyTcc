import React from "react";
import {SafeAreaView, StyleSheet, TextInput, View, Text} from "react-native";
import Buttons from "../../components/Button/Button";
import { useState } from "react";
//Usar dependencia data picker para o usuario escolher data de nascimento




export default function CadastroUsuario({navigation})  {

    const handleButtonPress = () =>{
        sendForm();
        navigation.reset({
            index: 0,
            routes: [{name: 'Login'}]
        })
    }

    const handleTextPress = () =>{
        sendForm()
        navigation.reset({
            index: 0,
            routes: [{name: 'Login'}]
        })
    }

    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null);
    const [date, setDate] = useState(null);

    async function sendForm() {
        try {
          let response = await fetch("http://192.168.3.16:8080/auth/cadastro", {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: name, 
              password: password,
              email: email,
              date: date
            })
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          } else {
            let data = await response.json();
            console.log(data);
            // Aqui você pode fazer algo com os dados recebidos, como atualizar o estado do componente
          }
        } catch (error) {
          console.log('There was a problem with the fetch operation: ' + error.message);
        }
      }

    return(
    <SafeAreaView style={style.araeView}>
         <Text style={style.titulo}>eSport<Text style={style.secondColorTittle}>fy</Text></Text>
         <Text>{name}-{password}-{email}-{date}</Text>
        <TextInput style={style.inputText} placeholder="DIGITE SEU EMAIL" required placeholderTextColor={"#7A7979"} onChangeText={text=>setEmail(text)} />
        <TextInput style={style.inputText} placeholder="DIGITE SEU NOME" required placeholderTextColor={"#7A7979"} onChangeText={text=>setName(text) }/>
        <TextInput style={style.inputText} placeholder="DIGITE SUA SENHA" required placeholderTextColor={"#7A7979"} onChangeText={text=>setPassword(text)}/>
        <TextInput style={style.inputText} placeholder="DIGITE DATA DE NASCIMENTO" required placeholderTextColor={"#7A7979"} onChangeText={text=>setDate(text)}/>
        <View  style={style.buttonContainer}>
            <Buttons title="Cadastrar" onPress={()=>handleButtonPress()}/>
        </View>
        <Text style={style.line}>_______________________________________________</Text>
        <Text style={style.noAccount} onPress={()=>handleTextPress()}>Já tem conta? <Text style={style.registerColor}>Conecte-se</Text></Text>
    </SafeAreaView>
    )
}


//STYLE
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
    buttons:{
        gap: 10,
        width: 200,
        height:100,
  
    },
    buttonContainer:{
        paddingTop: 60,

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
    noAccount:{
        color: "#fff",
        marginTop: 80,
    },
    registerColor:{
        color : "#51FC00"
    },
    

});