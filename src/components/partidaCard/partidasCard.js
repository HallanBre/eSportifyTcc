import React from "react";
import { View, StyleSheet, FlatList,Text, Image } from "react-native";
import { separatorItem } from "../separatorItem/SeparatorItem";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default PartidasCard = ({DATA}) => { 

  const handleButtonPress = () =>{
    navigation.reset({
        index: 0,
        routes: [{name: 'jogadoresCard'}]
    })
}

    const Item = ({title, type}) => (
        <View style={styles.item} onPress={()=>handleTextPress()}>
          <Text style={styles.title}>{title}</Text>
          <Icon name={type} size={100} color="white" style={styles.icon}/>
          

        </View>
      );

    return (
        <View>
        <FlatList 
          ItemSeparatorComponent={separatorItem} 
          data={DATA}
          renderItem={({item}) => <Item title={item.title} type={item.type} />}
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
      title: {
        marginLeft: 120,
        fontSize: 23,
        color: "white",
        
      },
      icon: {
        width: 100,
        height: 100,
    },
   

})