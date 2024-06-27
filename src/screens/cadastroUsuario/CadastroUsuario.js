import React from "react";
import {SafeAreaView, StyleSheet, TextInput, View, Text, Alert} from "react-native";
import Buttons from "../../components/Button/Button";
import { useState } from "react";
import { baseUrl } from "../../baseUrl/BaseUrl";
import MaskInput, { Masks } from 'react-native-mask-input';

//Usar dependencia data picker para o usuario escolher data de nascimento




export default function CadastroUsuario({navigation})  {


    const handleButtonPress = () =>{
       if( name == "" || password == "" || email == "" || date == "" || name == null || password == null || email == null || date == null){
            alert("Preencha todos os campos")}else
        if(name.length < 3){
            alert("Nome muito curto")}else{
                sendForm();
                
            }
}
       
        
   

    const handleTextPress = () =>{
        navigation.reset({
            index: 0,
            routes: [{name: 'Login'}]
        })
    }

    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null);
    const [date, setDate] = useState("");
    const [role, setRole] = useState("USER");

    async function sendForm() {
        try {
          let response = await fetch(`${baseUrl}/auth/cadastro`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: name, 
              password: password,
              email: email,
              date: date,
              role: role,
            })
          });
      
          if (!response.ok) {
            alert("Email ja Cadastrado")
            throw new Error(`HTTP error! status: ${response.status}`);
            
          } else {
            navigation.reset({
                index: 0,
                routes: [{name: 'Login'}]
            })
            let data = await response.json();
            console.log(data);
            
          }
        } catch (error) {
          console.log('There was a problem with the fetch operation ' + error.message);
          
        }
    }
        
      

    return(
    <SafeAreaView style={style.araeView}>
        <Text style={style.titulo}>eSport<Text style={style.secondColorTittle}>Fy</Text></Text>
        <TextInput style={style.inputText} placeholder="DIGITE SEU EMAIL" required placeholderTextColor={"#7A7979"} onChangeText={text=>setEmail(text)} />
        <TextInput style={style.inputText} placeholder="DIGITE SEU NOME" required placeholderTextColor={"#7A7979"} onChangeText={text=>setName(text) }/>
        <TextInput style={style.inputText} placeholder="DIGITE SUA SENHA" secureTextEntry required placeholderTextColor={"#7A7979"} onChangeText={text=>setPassword(text)}/>
        <MaskInput style={style.inputText} value={date} onChangeText={setDate} mask={Masks.DATE_DDMMYYYY} keyboardType="numeric"/>
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
        backgroundColor: "#000000",
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
    },
    inputText:{
        fontSize: 14,
        backgroundColor: "#cecece",
        height: 43,
        width: 330,
        zIndex: 1,
        paddingLeft: 12,
        borderRadius: 5,  
    },
    
    buttonContainer:{
        paddingTop: 50,

    },
    titulo:{
        color: "#FFF",
        fontSize: 89,
        fontWeight:"bold",
        fontFamily:"Roboto",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    secondColorTittle:{
        color: "#f48322"
    },
    line:{
        color:"#958C8C"
    },
    noAccount:{
        color: "#fff",
        marginTop: 80,
    },
    registerColor:{
        color : "#f48322"
    },
    

});