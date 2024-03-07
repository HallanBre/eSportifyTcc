import React from 'react'
import {Text,SafeAreaView, StyleSheet,View} from 'react-native'



export default props => {
    const data = [
        { id: 1, name: "Jogo 1", price: 10, data:"10/12/22" },
        { id: 2, name: "Jogo 2", price: 20, data:"13/03/24"},
        { id: 3, name: "Jogo 3", price: 30, data:"20/03/24"},
      ];
    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.fontTitle}>Jogos Marcados</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>ID</Text>
            <Text style={styles.tableHeader}>Nome</Text>
            <Text style={styles.tableHeader}>Preço</Text>
            <Text style={styles.tableHeader}>Data</Text>
          </View>
          {data.map((item) => (
            <View key={item.id} style={styles.tableRow}>
              <Text style={styles.tableData}>{item.id}</Text>
              <Text style={styles.tableData}>{item.name}</Text>
              <Text style={styles.tableData}>{item.price}</Text>
              <Text style={styles.tableData}>{item.data}</Text>
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
      paddingLeft: 25,
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
