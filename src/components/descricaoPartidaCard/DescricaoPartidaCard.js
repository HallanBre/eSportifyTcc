import React from 'react'
import {Text,View, StyleSheet} from 'react-native'
import { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {baseUrl} from '../../baseUrl/BaseUrl';
import axios from 'axios';

export default function DescricaoPartidaCard({itemId}) {
    const [data, setData] = useState([]);
  
    useEffect(() =>{
      const fetchData = async () => {
      try{
        console.log(`Buscando dados do back-end ${baseUrl}/partida/buscar/${itemId}`);
        const response = await axios.get(`${baseUrl}/partida/buscar/${itemId}`);
        setData(response.data);
      }catch(e){
        console.log('Erro ao buscar  dados do back-end', e);
      }
    };
    fetchData();
  }, []);
      
    return (
        <View style={styles.item}>
           {data?.quadra && <Icon name={data.quadra.categoria.descricao} size={100} color="white" style={styles.icon}/>}
            <Text style={styles.title}>{data.descricao}</Text>
            <Text style={styles.valor}>R$: {parseFloat(data.valor).toFixed(2).replace('.', ',')}</Text>
            <Text style={styles.date}>{data.dataHora}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        paddingTop:20,	
        backgroundColor: '#282828',
        paddingBottom: 50,
        justifyContent: "flex-start",
      },
      title: {  
        paddingTop: 20,
        paddingLeft: 120,
        fontSize: 16,
        color: "white",
        position: "absolute",
        
        
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
        paddingTop: 127
      },
      valor: {
        marginLeft: 250,
        fontSize: 20,
        color: "#f48322",
        position: "absolute",
        paddingTop: 120
      },
})