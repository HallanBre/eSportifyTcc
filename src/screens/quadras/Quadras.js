import React from 'react'
import {Text, StyleSheet, View} from 'react-native'
import JogadoresCard from '../../components/jogadoresCard/JogadoresCard';

export default props => {
    const DATA = [
        { id: 1, title: "Open Esporte", price: 10, type: "sports-volleyball"},
        { id: 2, title: "Arena Summer", price: 20, type: "sports-volleyball"},
        { id: 3, title: "Zofa", price: 30,  type: "sports-basketball" },
        { id: 4, title: "Zofa", price: 30,  type: "sports-basketball" },
        { id: 5, title: "Kart Santa Apolonia", price: 30,  type: "sports-motorsports" },
        { id: 6, title: "Kart Santa Apolonia", price: 30,  type: "sports-motorsports" },
        { id: 7, title: "Extreme Kart", price: 30,  type: "sports-motorsports" },
        { id: 8, title: "Extreme Kart", price: 30,  type: "sports-motorsports" },
        { id: 9, title: "Arena da Vila", price: 30, type: "sports-volleyball"},
        { id: 10, title: "Arena da Vila", price: 30, type: "sports-volleyball" },
        { id: 11, title: "AABB", price: 10, type: "sports-volleyball"},
        { id: 12, title: "Arena Summer", price: 10, type: "sports-volleyball" },
        { id: 13, title: "Open Esporte", price: 10, type: "sports-volleyball" },
        { id: 14, title: "Open Esporte", price: 10, type: "sports-volleyball" },
      ];
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

    return (
     <JogadoresCard USER={USER}/>
    
    )
}

const style = StyleSheet.create({
    container: {
        flexGrow: 1,	
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        
    }
})