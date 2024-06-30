import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View,TextInput } from "react-native";
import PartidasCard from "../../components/partidaCard/partidasCard";
import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";
import { baseUrl } from "../../baseUrl/BaseUrl";


export default function ({navigation}) {

  const [endereco, setEndereco] = useState(null);
  const [dataEndereco, setDataEndereco] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${baseUrl}/endereco/lista`);
      const arrayEnd = await response.json();
      if (arrayEnd !== dataEndereco) {
        setDataEndereco(arrayEnd);
        
      }
    };
  
    fetchData();
  }, [endereco]);
  

  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputText}>
                <Dropdown
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    style={styles.dropdown}
                    maxHeight={300}
                    data={dataEndereco}
                    labelField={"nome"}
                    valueField={"id"}
                    onChange={(val) => {setEndereco(val.id); }}
                    value={endereco}
                    search
                    searchPlaceHolder="Procurar"
                    placeholder="Selecione uma cidade"
                />
            </View>
      <PartidasCard/>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 65,
    paddingBottom: 30,
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
    marginLeft: "8%",
    borderRadius: 5,
    zIndex: 1,
    marginBottom: 10,
},
backgroundInputText:{
  backgroundColor: "#121212",
  height: 70,
  width: 400,
},
selectedTextStyle: {
  fontSize: 16,
  color: 'black',
},
placeholderStyle: {
  fontSize: 16,
  color: 'black',
},
dropdown: {
  height: 50,
  width: 330,
  borderColor: 'gray',
  borderWidth: 0.5,
  borderRadius: 8,
  paddingHorizontal: 8,
  backgroundColor: '#d9d9d9',
  color: 'black',
},


});