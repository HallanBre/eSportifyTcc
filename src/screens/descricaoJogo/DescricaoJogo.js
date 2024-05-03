import React from 'react'
import {Text, View, StyleSheet,TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonsCircle from '../../components/Button/ButtonCircle'
import JogadoresCard from '../../components/jogadoresCard/JogadoresCard';

export default function ({navigation }){


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
            <JogadoresCard />
            
            
            
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