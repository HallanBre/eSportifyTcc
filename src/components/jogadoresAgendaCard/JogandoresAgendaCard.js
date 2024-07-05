import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { separatorItem } from "../separatorItem/SeparatorItem";
import Buttons from "../../components/Button/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../baseUrl/BaseUrl";


export default JogadoresCard = ({ itemId, navigation }) => {

  const [dataUsuario, setDataUsuario] = useState([]);
  const [dadosUsuario, setDadosUsuario] = useState([]);
  const [session, setSession] = useState();

  const handleButtonPress = () => {
    sendForm();
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${baseUrl}/auth/session`);
        setSession(response.data);
      } catch (e) {
        console.log("Erro SESSAO", e);
      }
    };
    fetchUser();
  }, []);

  //USUARIOS LOGADOS
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/partida/buscar/${itemId}`);
        setDataUsuario(response.data);
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
        const userInfos = await Promise.all(
          dataUsuario.usuario.map((usuario) =>
            axios
              .get(`${baseUrl}/usuario/buscaId/${usuario}`)
              .then((response) => response.data)
          )
        );
        console.log("Dados dos usuários:", userInfos);
        setDadosUsuario(userInfos);
      } catch (e) {
        console.log("Erro ao buscar dados dos usuários", e);
      }
    };

    fetchUserInfos();
  }, [dataUsuario]);

  async function sendForm() {
    try {
      let response = await fetch(`${baseUrl}/partida/sair/${itemId}`, {
        method: "DELETE",
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
        let data = await response.text(); // Altere esta linha
        console.log(data);
      }
    } catch (error) {
      console.log(
        "There was a problem with the fetch operation: " + error.message
      );
    }
}

  const Item = ({ item }) => {
    const birthDateParts = item.date.split('/');
    const birthDate = new Date(birthDateParts[2], birthDateParts[1] - 1, birthDateParts[0]);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    if (currentDate.getMonth() < birthDate.getMonth() || 
        (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
      age--;
    }
    return (
      <View style={styles.item}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.idade}>{age} anos</Text>
      </View>
    );
  };
  const dadosAchatados = dadosUsuario.flat();

  return (
    <View style={styles.container}>
      <FlatList
        ItemSeparatorComponent={separatorItem}
        data={dadosAchatados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={Item}
        ListFooterComponent={
          <View style={styles.buttonContainer}>
            <Buttons
              title="Sair da partida"
              onPress={() => handleButtonPress()}
            />
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
