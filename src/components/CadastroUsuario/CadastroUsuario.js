import React from "react";
import {SafeAreaView, StyleSheet, TextInput, View, Text} from "react-native";
import  Buttons from "../Button/Button";
//Usar dependencia data picker para o usuario escolher data de nascimento

function handleButtonPress(){
    console.warn("CLICADO")
}

export default () => {

    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null);
    const [date, setDate] = useState(null);
    const [display, setDisplay] = useState(null);
    const [login, setLogin] = useState(null);


    async function sendForm()
    {
        let response = await fetch('http://192.168.3.16:8080/usuario/cadastro', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: user, 
                password: password,
                email: email,
                date: date
            })
        })
    }

    return(
    <SafeAreaView style={style.araeView}>
         <Text style={style.titulo}>eSport<Text style={style.secondColorTittle}>fy</Text></Text>

        <TextInput style={style.inputText} placeholder="DIGITE SEU EMAIL" placeholderTextColor={"#7A7979"} onChangeText={text=>setEmail(text)}/>
        <TextInput style={style.inputText} placeholder="DIGITE SEU NOME" placeholderTextColor={"#7A7979"} onChangeText={text=>setName(text)}/>
        <TextInput style={style.inputText} placeholder="DIGITE SUA SENHA" placeholderTextColor={"#7A7979"} onChangeText={text=>setPassword(text)}/>
        <View  style={style.buttonContainer}>
            <Buttons title="Cadastrar" onPress={handleButtonPress}/>
        </View>
        <Text style={style.line}>_______________________________________________</Text>
        <Text style={style.noAccount}>Não tem conta? <Text style={style.registerColor}>Registre-se</Text></Text>
    </SafeAreaView>
    )
}


//STYLE
const style = StyleSheet.create({
    araeView: {
        display: 'flex', 
        backgroundColor: "#181818",
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        paddingTop: 150,
    },
    inputText:{
        fontSize: 14,
        backgroundColor: "#d9d9d9",
        height: 43,
        width: 330,
        zIndex: 1,
        paddingLeft: 12,
        borderRadius: 5,  
    },
    buttons:{
        gap: 10,
        width: 200,
        height:100,
  
    },
    buttonContainer:{
        paddingTop: 60,
    },
    titulo:{
        color: "#51FC00",
        fontSize: 89,
        fontWeight:"bold",
        fontFamily:"Roboto",
        paddingBottom: 480,
        position: "absolute"
        
    },
    secondColorTittle:{
        color: "#fff"
    },
    line:{
        color:"#958C8C"
    },
    noAccount:{
        position:  "absolute",
        paddingTop: 700,
        color: "#fff"
    },
    registerColor:{
        color : "#51FC00"
    },
    

});