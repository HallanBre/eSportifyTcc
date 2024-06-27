import React from "react";
import { View, StyleSheet, FlatList,Text,TouchableOpacity } from "react-native";
import { separatorItem } from "../separatorItem/SeparatorItem";
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import { useState, useEffect } from "react";
import {baseUrl} from "../../baseUrl/BaseUrl";
import { useNavigation } from '@react-navigation/native';

export default function PartidasCard  ({})  { 
  const [data, setData] = useState([]);
  
  
  useEffect(() =>{
    const fetchData = async () => {
    try{
      console.log(`Buscando dados do back-end ${baseUrl}/partida/partidasUsuario`);

      const response = await axios.get(`${baseUrl}/partida/partidasUsuario`);
      setData(response.data);

      console.log('Dados do back-end', data);
    }catch(e){
      console.log('Erro ao buscar  dados do back-end', e);
    }
  };
  fetchData();
}, []);

    const navigation = useNavigation();    

    const renderItem = ({ item }) => (
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('DescricaoJogo', { itemId: item.id })}>
        <Text style={styles.title}>{item.quadra.nome}</Text>
        <Icon name={item.quadra.categoria?.descricao} size={100} color="white" style={styles.icon}/>
        <Text style={styles.valor}>R$: {parseFloat(item.valor).toFixed(2).replace('.', ',')}</Text>
        <Text style={styles.participants}>{new Set(item.usuario).size}/{item.numeroJogadores}</Text>
        <Text style={styles.date}>{item.dataHora}</Text>
      </TouchableOpacity>
    );
  
   
     

    return (
        <View>
         <FlatList  
          ItemSeparatorComponent={separatorItem} 
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}  
        />
        
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        position: "relative",
        backgroundColor: '#282828',
        height: 180,
        width: '100%',
        display: "flex",

      },
      title: {
        position: "relative",
        marginLeft: 120,
        marginTop: 20,
        fontSize: 23,
        color: "white",
      },
      icon: {
        width: 100,
        height: 100,
      
      },
      participants: {
        marginLeft: 310,
        fontSize: 20,
        color: "#f48322",
        marginTop: -60 //<- Trocar depois
      },
      date: {
        position: "relative",
        fontSize: 12,
        color: "white",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        paddingTop: 25,
        paddingLeft: 120,
      },
      valor: {
        marginLeft: 120,
        fontSize: 20,
        color: "#f48322",
        position: "absolute",
        paddingTop: 85
      },
})