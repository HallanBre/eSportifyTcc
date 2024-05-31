import React from 'react'
import {SafeAreaView, Text} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import MaskInput, { Masks } from 'react-native-mask-input';

export default function CadastrarPartida() {

    const handleButtonPress = () =>{
        if(descricaoQuadra == "" || descricaoQuadra == null){
             alert("Preencha todos os campos")}else{
                 sendForm();
             }
 }
    const [descricaoQuadra, setDescricaoQuadra] = useState(null);
    const [date, setDate] = useState(null);
    const [disponibilidade, setDisponibilidade] = useState(true);
    const [numeroJogadores, setNumeroJogadores] = useState(null);
    const [tempoPartidaa, setTempoPartida] = useState(null);
    const [valor, setValor] = useState(null);


    return (
        <SafeAreaView style={style.container}>
            <TextInput style={style.inputText} placeholder="Descrição da quadra" required placeholderTextColor={"#7A7979"} onChangeText={text=>setDescricaoQuadra(text)}/>
            <MaskInput style={style.inputText} value={date} onChangeText={setDate} mask={Masks.DATE_DDMMYYYY} keyboardType="numeric"/>
            <TextInput style={style.inputText} placeholder="Número de jogadores" required placeholderTextColor={"#7A7979"} onChangeText={text=>setNumeroJogadores(text)} keyboardType='numeric'/>
            <TextInput style={style.inputText} placeholder="Tempo de partida" required placeholderTextColor={"#7A7979"} onChangeText={text=>setTempoPartida(text)} keyboardType='numeric'/>
            <TextInput style={style.inputText} placeholder="Valor" required placeholderTextColor={"#7A7979"} onChangeText={text=>setValor(text)} keyboardType='numeric'/>
            <View style={style.select}>
                <Dropdown
                    placeholderStyle={style.placeholderStyle}
                    selectedTextStyle={style.selectedTextStyle}
                    style={style.dropdown}
                    maxHeight={300}
                    data={dataEndereco}
                    labelField={"nome"}
                    valueField={"id"}
                    onChange={(val) => {setEndereco(val.id); }}
                    value={endereco}
                    search
                    searchPlaceHolder="Procurar"
                    placeholder="Selecione um municipio"                   
                />
            </View>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#282828',
    },
    buttonContainer:{
        paddingTop: 60,
    },
    inputText:{
        fontSize: 14,
        backgroundColor: "#d9d9d9",
        height: 43,
        width: 330,
        zIndex: 1,
        paddingLeft: 12,
        borderRadius: 5,
        marginTop:20,
    },
    selectedTextStyle: {
        fontSize: 16,
        color: 'black',
      },
      placeholderStyle: {
        fontSize: 16,
        color: 'black',
      },
});