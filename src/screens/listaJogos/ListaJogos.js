import React from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList,TextInput } from "react-native";
import PartidasCard from "../../components/partidaCard/partidasCard";


export default function () {
  const DATA = [
    { id: 0, title: "Ginásio UNIVINTE", price: 10,  type: "sports-basketball"},
    { id: 1, title: "Open Esporte", price: 10, type: "sports-volleyball"},
    { id: 2, title: "Arena Summer", price: 20, type: "sports-volleyball"},
    { id: 3, title: "Zofa", price: 30,  type: "sports-basketball" },
    { id: 4, title: "Zofa", price: 30,  type: "sports-basketball" },
    { id: 5, title: "Kart Santa Apolonia", price: 30,  type: "sports-motorsports" },
    { id: 6, title: "Kart Santa Apolonia", price: 30,  type: "sports-motorsports" },
    { id: 7, title: "Extreme Kart", price: 30,  type: "sports-motorsports" },
    { id: 8, title: "Extreme Kart", price: 30,  type: "sports-motorsports" },
    { id: 9, title: "Arena da Vila", price: 30, type: "sports-volleyball"},
    { id: 10, title: "Arena da Vila", price: 30, type: "sports-volleyball" },
    { id: 11, title: "AABB", price: 10, type: "sports-volleyball"},
    { id: 12, title: "Arena Summer", price: 10, type: "sports-volleyball" },
    { id: 13, title: "Open Esporte", price: 10, type: "sports-volleyball" },
    { id: 14, title: "Open Esporte", price: 10, type: "sports-volleyball" },
  ];
  
  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backgroundInputText}>
        <TextInput style={styles.inputText} placeholder="Pesquisar"/>
      </View>

        <PartidasCard DATA={DATA}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 65,
    paddingBottom: 80,
    backgroundColor: "#121212",	
  },
  item: {
    backgroundColor: '#282828',
    marginVertical: 1,
    paddingTop: 28,
  },
  
  inputText:{
    fontSize: 14,
    backgroundColor: "#d9d9d9",
    height: 50,
    width: 330,
    paddingLeft: 12,
    marginLeft: "8%",
    borderRadius: 5,
    zIndex: 1,
},

backgroundInputText:{
  backgroundColor: "#121212",
  height: 70,
  width: 400,
  
}

});