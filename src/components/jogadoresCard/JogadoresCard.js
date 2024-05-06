import React from 'react'
import {Text, View, StyleSheet, FlatList} from 'react-native'
import { separatorItem } from "../separatorItem/SeparatorItem";
import Buttons from "../../components/Button/Button";


const USER_DATA = [
  { id: '1', name: 'User 1', idade: 25 },
  { id: '2', name: 'User 2', idade: 30 },
  { id: '3', name: 'User 3', idade: 35 },
  { id: '4', name: 'User 4', idade: 40 },
  { id: '5', name: 'User 5', idade: 45 },
  { id: '6', name: 'User 6', idade: 50 },
  { id: '7', name: 'User 7', idade: 55 },
  { id: '8', name: 'User 8', idade: 60 },
  { id: '9', name: 'User 9', idade: 65 },
  { id: '10', name: 'User 10', idade: 70 },
  
];


export default JogadoresCard = () =>{

  const Item = ({ name, idade }) => (
    
    <View style={styles.item}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.idade}>{idade} anos</Text>
    </View>
  );

  return (
    
    <View style={styles.container}>
      <FlatList
        ItemSeparatorComponent={separatorItem}
        data={USER_DATA}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Item name={item.name} idade={item.idade} />}
      />
        <View style={styles.buttonContainer}>
            <Buttons title="Entrar na partida" />
        </View>
    </View>
    
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282828',
    
  },
      name: {
        flex: 1,
        fontSize: 32,
        color: 'white',
        textAlign: 'left',
        
      },
      idade: {
        marginTop: 10,
        fontSize: 18,
        color: 'white',
        textAlign: 'right'
      },
      item: {
        backgroundColor: '#282828',
        padding: 45, // Aumenta o padding para aumentar o tamanho do item
        flexDirection: 'row', // Alinha os filhos do item na horizontal
        
      },
      buttonContainer:{
        
    }
      

})