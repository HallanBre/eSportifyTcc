import React from 'react'
import {Text, View, StyleSheet,TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonsCircle from '../../components/Button/ButtonCircle'
import Icon from 'react-native-vector-icons/MaterialIcons';
import JogadoresCard from '../../components/jogadoresCard/JogadoresCard';

export default function ({navigation }){
    const USER = [
        { id: 1, name: "Hallan", idade: 20},
        { id: 2, name: "Hallan", idade: 20},
        { id: 3, name: "Hallan", idade: 20},
        { id: 4, name: "Hallan", idade: 20},
        { id: 5, name: "Hallan", idade: 20},
        { id: 6, name: "Hallan", idade: 20},
        { id: 7, name: "Hallan", idade: 20},
        { id: 8, name: "Hallan", idade: 20 },
        { id: 9, name: "Hallan", idade: 20},
        { id: 10, name: "Hallan", idade: 20 },
        { id: 11, name: "Hallan", idade: 20},
        { id: 12, name: "Hallan", idade: 20},
        { id: 13, name: "Hallan", idade: 20},
        { id: 14, name: "Hallan", idade: 20},
      ];



    const handleButtonPress = () =>{
        navigation.reset({
            index: 0,
            routes: [{name: 'ListaJogos'}]
        })
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.buttonLoc}>
                    <ButtonsCircle onPress={handleButtonPress}/>
                </TouchableOpacity>
                <Text style={styles.nomeQuadra}>Nome Quadra</Text>
            </View>
            <JogadoresCard USER={USER}/>
            
            
            
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3F3D3D',
        
        
    },
    header:{

        backgroundColor: '#121212',
        height:90,
        width: "100%",
        
        
    },
    nomeQuadra:{
        fontSize: 18,
        color: '#fff',
        marginLeft:150,
        marginTop: -38,
        
    },
    buttonLoc:{
        zIndex:1,
        marginLeft: 20,
        paddingTop: 25
        
    }

})