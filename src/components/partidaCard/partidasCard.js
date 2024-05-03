import React from "react";
import { View, StyleSheet, FlatList,Text,TouchableOpacity } from "react-native";
import { separatorItem } from "../separatorItem/SeparatorItem";
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import { useState, useEffect } from "react";
import {baseUrl} from "../../baseUrl/BaseUrl";

export default function PartidasCard  ({navigation})  { 
  const [data, setData] = useState([]);
  
  useEffect(() =>{
    const fetchData = async () => {
    try{
      console.log(`Buscando dados do back-end ${baseUrl}`);
      const response = await axios.get(`${baseUrl}/quadra/lista`);
      setData(response.data);
    }catch(e){
      console.log('Erro ao buscar  dados do back-end', e);
    }
  };

  fetchData();
}, []);
 
    const renderItem = ({ item }) => (
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Detalhes', { itemId: item.id })}>
        <Text style={styles.title}>{item.nome}</Text>
        <Icon name={item.categoria.descricao} size={100} color="white" style={styles.icon}/>
        <Text style={styles.valor}>R$: {Number(item.partida.valor).toFixed(2)}</Text>
        <Text style={styles.participants}>0/{item.partida.numeroJogadores}</Text>  
        <Text style={styles.date}>{item.partida.dataHora}</Text>
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
        flex: 1,	
        backgroundColor: '#282828',
        paddingBottom: 120,
        justifyContent: "flex-start",
        
      },
      title: {
        
        marginLeft: 120,
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
        color: "#51FC00",
        marginTop: -60 //<- Trocar depois
      },
      date: {
        marginLeft: 120,
        fontSize: 12,
        color: "white",
        position: "absolute",
        paddingTop: 150
      },
      valor: {
        marginLeft: 120,
        fontSize: 20,
        color: "#51FC00",
        position: "absolute",
        paddingTop: 75
      },
})