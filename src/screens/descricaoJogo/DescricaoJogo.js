import React from 'react'
import {StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import JogadoresCard from '../../components/jogadoresCard/JogadoresCard';
import DescricaoPartidaCard from '../../components/descricaoPartidaCard/DescricaoPartidaCard';

export default function DescricaoJogo({route,navigation}){
    const {itemId} = route.params;

    
    return (
        <SafeAreaView style={styles.container}>    
            <DescricaoPartidaCard itemId={itemId}/>
            <JogadoresCard itemId={itemId} navigation={navigation} /> 
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