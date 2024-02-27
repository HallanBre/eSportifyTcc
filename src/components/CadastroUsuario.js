import React from "react";
import {SafeAreaView, StyleSheet, TextInput,Button, Image, View} from "react-native";
//Usar dependencia data picker para o usuario escolher data de nascimento
export default () => {
    return(
    <SafeAreaView style={style.araeView}>
        <TextInput style={style.fonts} placeholder="DIGITE SEU EMAIL" placeholderTextColor={"#fff"}/>
        <TextInput style={style.fonts} placeholder="DIGITE SEU NOME" placeholderTextColor={"#fff"}/>
        <TextInput style={style.fonts} placeholder="DIGITE SUA SENHA" placeholderTextColor={"#fff"}/>
        <View  style={style.buttons}>
            <Button title="CADASTRAR" color= "#404040" onPress={()=> console.warn('cadastrado:p')}/>
            <Button title="LOGIN" color= "#404040" onPress={()=> console.warn('logado:p')}/>
        </View>
    </SafeAreaView>
    )
}

const style = StyleSheet.create({
    araeView: {
        backgroundColor: "#181818",
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
              
    },
    fonts:{
        fontSize: 18,
        backgroundColor: "#404040",
        height: 40,
        width: 285,
        paddingLeft: 12,
        
    },
    buttons:{
        gap: 10,
        width: 200,
        height:100,
  
    },
    img:{
        height: 100,
        width: 325,
    }

});