import React from 'react'
import {Text,SafeAreaView,View,StyleSheet,TextInput} from 'react-native'
import { useState } from "react";
import Buttons from "../../components/Button/Button";
import Selects from '../../components/select/Selects';


export default function CadastroQuadra(){

    const handleButtonPress = () =>{
        if( name == "" || categoria == "" || name == null || categoria == null){
             alert("Preencha todos os campos")}else{
                 sendForm();
             }
 }

    const [name, setName] = useState(null);
    const [categoria, setCategoria] = useState(null);
    const [empresa, setEmpresa] = useState(null);
 
    async function sendForm() {
        try {
            let response = await fetch("http://10.10.221.169:8080/quadra/cadastro", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        body: JSON.stringify({
          name: name, 
          categoria: categoria,
          empresa: empresa
        })
      });
  
      if (!response.ok) {
        alert("Email ja Cadastrado")
        throw new Error(`HTTP error! status: ${response.status}`);
        
      } else {
        navigation.reset({
            index: 0,
            routes: [{name: 'Login'}]
        }) //MUDAR PARA UM VIZUALIZADOR DE QUADRAS CADASTRADAS PELA EMPRESA
        let data = await response.json();
        console.log(data);
        
      }
    } catch (error) {
      console.log('There was a problem with the fetch operation: ' + error.message);
      
    }
}
    
    return (
        <SafeAreaView style={style.container}>
            <TextInput style={style.inputText} placeholder="Nome da Quadra" required placeholderTextColor={"#7A7979"} onChangeText={text=>setName(text)}/>
            <View style={style.select}>
                <Selects url='categoria/lista' placeholder='Selecione sua categoria' /> 
            </View>
            <View>

            </View>
        <View  style={style.buttonContainer}>
            <Buttons title="Cadastrar" onPress={()=>handleButtonPress()}/>
        </View>

        </SafeAreaView>
    )
    
}
const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#282828',
    },
    buttonContainer:{
        paddingTop: 60,
    },
    select:{
        marginTop: 20,
    },
    title:{
        color: 'white',
        fontSize: 16,
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
})