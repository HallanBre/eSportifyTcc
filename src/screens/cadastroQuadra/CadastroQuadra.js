import React from 'react'
import {SafeAreaView,View,StyleSheet,TextInput,Text} from 'react-native'
import { useState, useEffect } from "react";
import Buttons from "../../components/Button/Button";
import { SelectList } from 'react-native-dropdown-select-list'
import axios from 'axios';
import {baseUrl} from "../../baseUrl/BaseUrl";
import { Dropdown } from 'react-native-element-dropdown';

export default function CadastroQuadra({navigation}){

        
  

    const handleButtonPress = () =>{
        if( name == "" || categoria == "" || endereco =="" || name == null || categoria == null || endereco == null || detalheEndereco == "" || detalheEndereco == null){
             alert("Preencha todos os campos")}else{
                 sendForm();
             }
 }


   const handleNavigation = () =>{ 
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}]
    }) 
  }

    const [name, setName] = useState(null);
    const [categoria, setCategoria] = useState(null);
    const [empresa, setEmpresa] = useState(null);
    const [endereco, setEndereco] = useState(null);
    const [detalheEndereco, setDetalheEndereco] = useState(null);
    const [data, setData] = useState(null);
    const [dataEmpresa, setDataEmpresa] = useState(null);
    const [dataEndereco, setDataEndereco] = useState([]);

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


    //DADOS DE MUNICIPIO ----------------------------------------
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`${baseUrl}/endereco/lista`);
        const arrayEnd = await response.json();
        if (arrayEnd !== dataEndereco) {
          setDataEndereco(arrayEnd);
          
        }
      };
    
      fetchData();
    }, [endereco]); 

    


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
            detalheEndereco: detalheEndereco,
            categoria: { id: categoria },
            empresa: { id: empresa },
            endereco: { id: endereco },
            
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
            <TextInput style={style.inputText} placeholder="Detalhes do Endereço" required placeholderTextColor={"#7A7979"} onChangeText={text=>setDetalheEndereco(text)}/>
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
                    setSelected={(val) => {console.log(empresa) ; setEmpresa(val)}}
                    boxStyles={{width:330, backgroundColor:'#d9d9d9'}}
                    dropdownStyles={{backgroundColor:'#d9d9d9'}}
                    placeholder='selecione uma empresa'
                    searchPlaceholder='selecione uma empresa'
                    data={dataEmpresa}
                    save="key"
                />
            </View>

            <View style={style.select}>
                <Dropdown
                    placeholderStyle={style.placeholderStyle}
                    selectedTextStyle={style.selectedTextStyle}
                    style={style.dropdown}
                    maxHeight={300}
                    data={dataEndereco}
                    labelField={"nome"}
                    valueField={"id"}
                    onChange={(val) => {setEndereco(val.id); }}
                    value={endereco}
                    search
                    searchPlaceHolder="Procurar"
                    placeholder="Selecione um municipio"
                    
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
    backgroundColor: '#282828',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
},
buttonContainer:{
    paddingTop: 20,
    width: 330,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
},
inputText:{
    width: 330,
    height: 45,
    backgroundColor: '#d9d9d9',
    borderRadius: 10,
    paddingLeft: 10,
    color: '#7A7979',
    display: 'flex',
    justifyContent: 'center',
    gap: 10,
    marginTop: 10,
},
select:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
}
})