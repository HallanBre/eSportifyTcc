import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { separatorItem } from "../separatorItem/SeparatorItem";
import Buttons from "../../components/Button/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../baseUrl/BaseUrl";

//itemId é o id da partida
export default JogadoresCard = ({ itemId, navigation }) => {
  const [dataUsuario, setDataUsuario] = useState([]);
  const [dadosUsuario, setDadosUsuario] = useState([]);

  const handleButtonPress = () => {
    sendForm();
  };

  //USUARIOS LOGADOS
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/partida/buscar/${itemId}`);
        setDataUsuario(response.data); // Atualiza o estado com os dados recebidos
      } catch (e) {
        console.log("Erro ao buscar dados do back-end", e);
      }
    };
    fetchData();
  }, []);

//BUSCA OS USUARIOS QUE ESTAO NA PARTIDA
useEffect(() => {
  const fetchUserInfos = async () => {
    try {
      // Mapeia cada ID de usuário para uma requisição de fetch e aguarda todas as respostas
      const userInfos = await Promise.all(
        dataUsuario.usuario.map((usuario) =>
          axios
            .get(`${baseUrl}/usuario/buscaId/${dataUsuario.usuario}`) // Ajuste para enviar um único ID
            .then((response) => response.data)
        )
      );
      console.log("Informações dos usuários:", userInfos);
      // Atualize o estado ou a variável com as informações dos usuários aqui, se necessário
      setDadosUsuario(userInfos);
      console.log("Dados dos usuários:", dadosUsuario); // Removido o await
    } catch (e) {
      console.log("Erro ao buscar dados dos usuários", e);
    }
  };

  fetchUserInfos();
}, [dataUsuario]);

  //ENVIAR O DADO DO USUARIO ID PARA O BACKEND
  async function sendForm() {
    try {
      let response = await fetch(`${baseUrl}/partida/participar/${itemId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: "ListaJogos" }],
        });
        let data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log(
        "There was a problem with the fetch operation: " + error.message
      );
    }
  }



  //VERIFICAR SE AQUI ESTA CORRETO DEPOIS DE APLICAR AS FUNCIONALIDADES DA SESSAO
 const Item = ({ item }) => ( // Change `dadosUsuario` to `item` to match the expected structure
  <View style={styles.item}>
    <Text style={styles.name}>{item.name}</Text> 
    <Text style={styles.idade}>{item.date} anos</Text> 
  </View>
);
  const dadosAchatados = dadosUsuario.flat();

  // Dentro do seu componente que contém o FlatList
  return (
    <View style={styles.container}>
      <FlatList
        ItemSeparatorComponent={separatorItem}
        data={dadosAchatados}
        keyExtractor={(item) =>item.id.toString()}
        renderItem={Item}
        
        ListFooterComponent={
          <View style={styles.buttonContainer}>
            <Buttons title="Entrar na partida" onPress={()=>handleButtonPress()}/>
          </View>
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282828",
  },
  name: {
    flex: 1,
    fontSize: 32,
    color: "white",
    textAlign: "left",
  },
  idade: {
    marginTop: 10,
    fontSize: 18,
    color: "white",
    textAlign: "right",
  },
  item: {
    backgroundColor: "#282828",
    padding: 45, // Aumenta o padding para aumentar o tamanho do item
    flexDirection: "row", // Alinha os filhos do item na horizontal
  },
  buttonContainer: {
    alignItems: "center",
  },
});
