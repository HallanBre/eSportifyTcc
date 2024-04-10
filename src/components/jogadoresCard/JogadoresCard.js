import React from 'react'
import {Text, View, StyleSheet,TouchableOpacity, FlatList} from 'react-native'
import { separatorItem } from "../separatorItem/SeparatorItem";



export default JogadoresCard = ({USER}) =>{

    const Item = ({name, idade}) => (
        <TouchableOpacity style={styles.item}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.idade}>{idade}</Text>
          <Text style={styles.date}>18/10/2024</Text> 
        </TouchableOpacity>
      );
    return (
        <View style={styles.teste} >
            <FlatList
             ItemSeparatorComponent={separatorItem} 
             user={USER}
             renderItem={({item}) => <Item name={item.name} idade={item.idade} />}
             keyExtractor={item => item.id}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    item: {
        flex: 1,
        backgroundColor: '#282828',
        paddingTop: 18,
        paddingBottom: 80,
        justifyContent: "flex-start",
        
      },
      name: {
        marginLeft: 120,
        fontSize: 23,
        color: "white",
        
      },
      idade: {
        marginLeft: 310,
        fontSize: 16,
        color: "#51FC00",
        marginTop: -60 //<- Trocar depois
      },
      date: {
        marginLeft: 120,
        fontSize: 12,
        color: "white",
        position: "absolute",
        paddingTop: 150
      }

})