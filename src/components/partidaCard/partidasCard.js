import React from "react";
import { View, StyleSheet, FlatList,Text } from "react-native";
import { separatorItem } from "../separatorItem/SeparatorItem";

export default PartidasCard = ({DATA}) => { 
    const Item = ({title, type}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
      );

    return (
        <View>
        <FlatList 
          ItemSeparatorComponent={separatorItem} 
          data={DATA}
          renderItem={({item}) => <Item title={item.title}/>}
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
        marginLeft: 150,
        fontSize: 23,
        color: "white",
        
      },

})