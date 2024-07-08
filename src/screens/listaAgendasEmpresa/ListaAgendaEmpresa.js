import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View,TextInput } from "react-native";
import PartidaAgendaEmpresaCard from "../../components/partidaAgendaEmpresa/PartidaAgendaEmpresaCard";
import Buttons from "../../components/Button/Button";


export default function ({navigation}) {
  

  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <PartidaAgendaEmpresaCard/>
      <View  style={styles.buttonContainer}>
          <Buttons title="Voltar" onPress={()=>navigation.reset({index: 0,routes: [{name: 'CadastroQuadra'}]}) }/>
      </View>    
    </SafeAreaView>
  );
}



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
  buttonContainer:{
    paddingTop: 170,
    width: 390,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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