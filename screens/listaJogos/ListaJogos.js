import React from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList,TextInput } from "react-native";
import PartidasCard from "../../src/components/partidaCard/partidasCard";


export default function () {
  const DATA = [
    { id: 0, title: "Jogo 1", price: 10,  type: "basquete"},
    { id: 1, title: "Jogo 1", price: 10, type: "futebol"},
    { id: 2, title: "Jogo 2", price: 20, type: "futebol"},
    { id: 3, title: "Jogo 3", price: 30,  type: "basquete" },
    { id: 4, title: "Jogo 3", price: 30,  type: "basquete" },
    { id: 5, title: "Jogo 3", price: 30,  type: "kart" },
    { id: 6, title: "Jogo 3", price: 30,  type: "kart" },
    { id: 7, title: "Jogo 3", price: 30,  type: "kart" },
    { id: 8, title: "Jogo 3", price: 30,  type: "kart" },
    { id: 9, title: "Jogo 3", price: 30, type: "volei"},
    { id: 10, title: "Jogo 3", price: 30, type: "volei" },
    { id: 11, title: "Jogo 1", price: 10, type: "volei"},
    { id: 12, title: "Jogo 1", price: 10, type: "volei" },
    { id: 13, title: "Jogo 1", price: 10, type: "volei" },
    { id: 14, title: "Jogo 2", price: 10, type: "volei" },
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
    alignContent: "center",
    justifyContent: "center",
    paddingTop: 75,
    paddingBottom: 10,
    backgroundColor: "#121212",	
    
    
  },
  item: {
    backgroundColor: '#282828',
    marginVertical: 1,
    paddingTop: 28,
    alignContent: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
  },
  inputText:{
    fontSize: 14,
    backgroundColor: "#d9d9d9",
    height: 43,
    width: 330,
    zIndex: 1,
    paddingLeft: 12,
    marginLeft: "8%",
    borderRadius: 5,
   
},
backgroundInputText:{
  backgroundColor: "#121212",
  height: 60,
  width: 400,
}

});