import React from "react";
import { View, StyleSheet, FlatList,Text, Image,TouchableOpacity } from "react-native";
import { separatorItem } from "../separatorItem/SeparatorItem";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function PartidasCard  ({DATA, navigation})  { 
 
    const Item = ({title, type, onPress, navigation}) => (
        <TouchableOpacity style={styles.item}  >
          <Text style={styles.title}>{title}</Text>
          <Icon name={type} size={100} color="white" style={styles.icon}/>
          <Text style={styles.participants}>08/12</Text>  
          <Text style={styles.date}>18/10/2024</Text>
        </TouchableOpacity>
      );
     

    return (
        <View>
          <FlatList 
            ItemSeparatorComponent={separatorItem} 
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
            <Item
              title={item.title}
              type={item.type}
              navigation={navigation}
             />
            )}
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