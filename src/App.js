
import { Image } from 'react-native';
import ListaJogos from '../src/screens/listaJogos/ListaJogos';
import LoginUsuario from '../src/screens/login/LoginUsuario';
import CadastroUsuario from '../src/screens/cadastroUsuario/CadastroUsuario';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DescricaoJogo from './screens/descricaoJogo/DescricaoJogo';
import CadastroQuadra from './screens/cadastroQuadra/CadastroQuadra';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

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

function MyStack(){
  return(
    <Stack.Navigator screenOptions={{headerTransparent : true}}>
      <Stack.Screen options={{title: ''}} name="CadastroQuadra" component={CadastroQuadra}/>
      <Stack.Screen options={{title: ''}} name="Login" component={LoginUsuario}/>
      <Stack.Screen options={{title: ''}} name="CadastroUsuario" component={CadastroUsuario}/>
      <Stack.Screen options={{title: ''}} name="ListaJogos" component={ListaJogos}/>
      <Stack.Screen options={{title: ''}} name="DescricaoJogo" component={DescricaoJogo}/>
    </Stack.Navigator>
  );
}

//container de navegação
export default function App() {
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}





