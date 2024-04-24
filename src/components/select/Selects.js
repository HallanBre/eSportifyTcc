import React from 'react'
import {View} from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import { useState, useEffect, Text } from 'react'
import axios from 'axios';

export  default function Selects({url}) {

    const [selected, setSelected] = useState("")
    const [data, setData] = useState([]);

    useEffect(() =>{
        const fetchData = async () => {
        try{
          console.log(`URL: http://192.168.3.16:8080/${url}`);
          axios.get(`http://192.168.3.16:8080/${url}`) // depois criar uma variavel para trocar isso dependendo da tela que estiver
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

    return (
        <View>
            <SelectList boxStyles={{width:330, backgroundColor:'#d9d9d9'}} dropdownStyles={{backgroundColor:'#d9d9d9'}} placeholder='selecione uma opção' searchPlaceholder='selecione uma opção' data={data} setSelected={setSelected} />
        </View>
    )
}
