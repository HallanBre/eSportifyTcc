import React from 'react'
import {Text,SafeAreaView,StyleSheet, TextInput,View} from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../../baseUrl/BaseUrl';

export default function CadastroPartida()  {

    const [dataHora, setDataHora] = useState(null);
    const [disponibilidade] = useState(true);
    const [numeroJogadores, setNumeroJogadores] = useState(null);
    const [tempoPartida, setTempoPartida] = useState(null);
    const [valor, setValor] = useState(null);
    const [quadra, setQuadra] = useState(null);
    const [dataQuadra, setDataQuadra] = useState([]);

    const handleButtonPress = () =>{
      if( dataHora == "" ||  numeroJogadores == "" || tempoPartida == "" || valor == "" || quadra == "" || dataHora == null ||  numeroJogadores == null || tempoPartida == null || valor == null || quadra == null){
            alert("Preencha todos os campos")
           }else{
              sendForm();
           }
    }
    useEffect(() =>{
      const fetchData = async () => {
      try{
        axios.get(`${baseUrl}/quadra/lista`) // depois criar uma variavel para trocar isso dependendo da tela que estiver
          .then((response) => {
            let newArray = response.data.map((item) => {
              return {key:item.id, value:item.nome}
            })
            setDataQuadra(newArray)
          })
      }catch(e){
        console.log('Erro ao buscar  dados do back-end', e);
      }
    };
  
      fetchData();
    }, []);


    //ENVIO DE FORMULARIO PARA O BACKEND 
    async function sendForm() {
      try {
          console.log(quadra)
          let response = await fetch(`${baseUrl}/partida/salvar`, {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
          },
      body: JSON.stringify({
         dataHora: dataHora,
          disponibilidade: disponibilidade,
          numeroJogadores: numeroJogadores,
          tempoPartida: tempoPartida,
          valor: valor,
          quadra: {id: quadra},
          
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
            <Text style={style.inputText}>{quadra}</Text>
            <TextInput style={style.inputText} placeholder="Selecione a data e hora da partida" required placeholderTextColor={"#7A7979"} onChangeText={text=>setDataHora(text)}/>
            <TextInput style={style.inputText} placeholder="Numero de jogadores" required placeholderTextColor={"#7A7979"} onChangeText={text=>setNumeroJogadores(text)}/>
            <TextInput style={style.inputText} placeholder="Tempo de partida" required placeholderTextColor={"#7A7979"} onChangeText={text=>setTempoPartida(text)}/>
            <TextInput style={style.inputText} placeholder="Valor" required placeholderTextColor={"#7A7979"} onChangeText={text=>setValor(text)}/>
            <View style={style.select}>
                <Dropdown
                    placeholderStyle={style.placeholderStyle}
                    selectedTextStyle={style.selectedTextStyle}
                    style={style.dropdown}
                    maxHeight={300}
                    data={dataQuadra}
                    labelField={"value"}
                    valueField={"key"}
                    onChange={(val) => {setQuadra(parseInt(val.key)); }}
                    value={quadra}
                    search
                    searchPlaceHolder="Procurar"
                    placeholder="Selecione uma quadra"
                />
                
            </View>
            <View  style={style.buttonContainer}>
                <Buttons title="Cadastrar" onPress={()=>handleButtonPress()}/>
            </View>
            <View  style={style.buttonContainer}>
                <Buttons title="Voltar" onPress={()=>handleNavigation()}/>
            </View>

        </SafeAreaView>
  )
}

const style = StyleSheet.create({
  
  container:{
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    backgroundColor: '#282828',
  },
  inputText:{
    width: 330,
    height: 40,
    backgroundColor: '#d9d9d9',
    borderRadius: 10,
    paddingLeft: 10,
    color: '#7A7979',
  },
  select:{
    width: 330,
    height: 40,
    backgroundColor: '#d9d9d9',
    borderRadius: 10,
    paddingLeft: 10,
    color: '#7A7979',
  },
  selectedTextStyle:{
    color: '#7A7979',
  },
  dropdown:{
    width: 330,
    height: 40,
    backgroundColor: '#d9d9d9',
    borderRadius: 10,
    paddingLeft: 10,
    color: '#7A7979',
  },

})