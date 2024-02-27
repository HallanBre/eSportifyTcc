
import { StyleSheet, Text, View, Image } from 'react-native';
import ListaJogos from './components/ListaJogos';
import LoginUsuario from './components/LoginUsuario';
import CadastroUsuario from './components/CadastroUsuario';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

//botões de navegação inferior
function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerTransparent : true, title: "", tabBarActiveTintColor: '#000'}}>
      <Tab.Screen name="Lista Jogos"  component={ListaJogos} options={{
        tabBarIcon: ({ color }) => (
          <Image
            style={{ width: 35, height: 35 }}
            source={require('../img/homeIcon.png')
          }/>
         ),
         tabBarLabel: "home"
        }}
      />

      <Tab.Screen name="Login" component={LoginUsuario} />
    </Tab.Navigator>
  );
}

//container de navegação
export default function App() {
  return(
    <NavigationContainer >
      <MyTabs />    
    </NavigationContainer>
  );
}


// export default function App() {
//   return (
//     <ListaJogos/>
//     //<CadastroUsuario/>
//     //<LoginUsuario/>
//   );
  
//}


