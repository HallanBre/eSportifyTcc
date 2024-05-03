import React from 'react'
import {Text,SafeAreaView,View,StyleSheet,TextInput} from 'react-native'
import { useState, useEffect } from "react";
import Buttons from "../../components/Button/Button";
import { SelectList } from 'react-native-dropdown-select-list'
import axios from 'axios';
import {baseUrl} from "../../baseUrl/BaseUrl";

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
    const [data, setData] = useState(null);
    const [dataEmpresa, setDataEmpresa] = useState(null);
    const [selected, setSelected] = React.useState("");

    //PUXAR OS DADOS CATEGORIA ----------------------------------------
    useEffect(() =>{
        const fetchData = async () => {
        try{
          axios.get(`${baseUrl}/categoria/lista`) // depois criar uma variavel para trocar isso dependendo da tela que estiver
            .then((response) => {
              let newArray = response.data.map((item) => {
                return {key:item.id, value:item.nome}
              })
              setData(newArray)
            })
        }catch(e){
          console.log('Erro ao buscar  dados do back-end', e);
        }
      };
    
      fetchData();
    }, []);

    //PUXAR OS DADOS EMPRESA ----------------------------------------
    useEffect(() =>{
        const fetchData = async () => {
        try{
          axios.get(`${baseUrl}/empresa/lista`) // depois criar uma variavel para trocar isso dependendo da tela que estiver
            .then((response) => {
              let newArray = response.data.map((item) => {
                return {key:item.id, value:item.nome}
              })
              setDataEmpresa(newArray)
            })
        }catch(e){
          console.log('Erro ao buscar  dados do back-end', e);
        }
      };
    
      fetchData();
    }, []);


    //ENVIAR OS DADOS ----------------------------------------
    async function sendForm() {
        try {
            let response = await fetch(`${baseUrl}/quadra/salvar`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        body: JSON.stringify({
            nome: name, 
            categoria: { id: categoria },
            empresa: { id: empresa }
        })
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        
      } else {
        navigation.reset({
            index: 0,
            routes: [{name: 'ListaJogos'}]
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
                <SelectList
                    setSelected={(val) => setCategoria(val)}
                    boxStyles={{width:330, backgroundColor:'#d9d9d9'}}
                    dropdownStyles={{backgroundColor:'#d9d9d9'}}
                    placeholder='selecione uma categoria'
                    searchPlaceholder='selecione uma categoria'
                    data={data} 
                    save="key"
                />
            </View>
            <View style={style.select}>
                <SelectList
                    setSelected={(val) => setEmpresa(val)}
                    boxStyles={{width:330, backgroundColor:'#d9d9d9'}}
                    dropdownStyles={{backgroundColor:'#d9d9d9'}}
                    placeholder='selecione uma empresa'
                    searchPlaceholder='selecione uma empresa'
                    data={dataEmpresa}
                    save="key"
                />
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
    inputText:{
        fontSize: 14,
        backgroundColor: "#d9d9d9",
        height: 43,
        width: 330,
        zIndex: 1,
        paddingLeft: 12,
        borderRadius: 5,
         
    },
    select:{
        paddingTop: 20,
    }
})