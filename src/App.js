
import { Image } from 'react-native';
import ListaJogos from './components/ListaJogos';
import LoginUsuario from './components/Login/LoginUsuario';
import CadastroUsuario from './components/CadastroUsuario/CadastroUsuario';
import AgendaJogos from './components/AgendaJogos';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Quadras from './components/Quadras/Quadras';

const Tab = createBottomTabNavigator();

//botões de navegação inferior
function MyTabs() {
  return (
    
    <Tab.Navigator screenOptions={{headerTransparent : true, title: "", tabBarActiveTintColor: '#000'}}>
      <Tab.Screen name="Lista Jogos"  component={ListaJogos} options={{
        tabBarIcon: () => (
          <Image
            style={{ width: 30, height: 30}}
            source={require('../img/homeIcon.png')
          }/>
         ),
         tabBarLabel: "home"
        }}
      />

      <Tab.Screen name="Login" component={LoginUsuario} options={{
        tabBarIcon: () =>(
          <Image
            style= {{width:30, height:30, marginTop:5, marginLeft:5}}
            source={require('../img/Agenda.png')
            }/>
          ),
          tabBarLabel: "agenda"
        }} 
      />
    </Tab.Navigator>
  );
}

//container de navegação
export default function App() {
  return(
    <LoginUsuario/>
  );
}





