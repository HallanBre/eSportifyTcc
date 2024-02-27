import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default () => {
  const data = [
    { id: 1, name: "Jogo 1", price: 10 },
    { id: 2, name: "Jogo 2", price: 20 },
    { id: 3, name: "Jogo 3", price: 30 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.fontTitle}>Lista de Jogos</Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>ID</Text>
          <Text style={styles.tableHeader}>Nome</Text>
          <Text style={styles.tableHeader}>Preço</Text>
        </View>
        {data.map((item) => (
          <View key={item.id} style={styles.tableRow}>
            <Text style={styles.tableData}>{item.id}</Text>
            <Text style={styles.tableData}>{item.name}</Text>
            <Text style={styles.tableData}>{item.price}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#181818",
  },
  fontTitle: {
    color: "#fff",
    paddingTop: 50,
    paddingLeft: 50,
    paddingBottom: 25,
    fontSize: 45,
  },
  table: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    height: 900,
    //tabela
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    //dentro da tabela
  },
  tableHeader: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    //COR DO TITULO DA TABELA
  },
  tableData: {
    color: "#000",
    fontSize: 16,
    //COR DA FONTE DA TABELA
  },
});