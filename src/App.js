import { Image } from "react-native";
import ListaJogos from "../src/screens/listaJogos/ListaJogos";
import LoginUsuario from "../src/screens/login/LoginUsuario";
import CadastroUsuario from "../src/screens/cadastroUsuario/CadastroUsuario";
import CadastroQuadra from "./screens/cadastroQuadra/CadastroQuadra";
import CadastroPartida from "./screens/cadastroPartida/CadastroPartida";
import LogoutScreen from "./screens/logout/Logout";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DescricaoJogo from "./screens/descricaoJogo/DescricaoJogo";
import "react-native-gesture-handler";
import ListaAgenda from "./screens/listaAgenda/ListaAgenda";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

//botões de navegação inferior
function MyTabs() {
  return (
    <Tab.Navigator 
      screenOptions={{
        headerTransparent: true,
        title: "",
        tabBarActiveTintColor: '#f48322', // Cor do ícone e texto quando ativo
        tabBarInactiveTintColor: '#f48322', // Cor do texto quando inativo
        tabBarStyle: { backgroundColor: '#000' },
        tabBarLabelStyle: { color: '#f48322' }, // Adiciona esta linha para definir a cor do texto
      }}>
      <Tab.Screen name="Lista Jogos" component={ListaJogos} options={{
        tabBarIcon: () => (
          <Image
            style={{ width: 30, height: 30 }}
            tintColor={'#f48322'}
            source={require('../img/homeIcon.png')}
          />
        ),
        tabBarLabel: "home"
      }}
      />
      <Tab.Screen name="ListaAgenda" component={ListaAgenda} options={{
        tabBarIcon: () => (
          <Image
            style={{ width: 30, height: 30, marginTop: 5, marginLeft: 5 }}
            tintColor={'#f48322'}
            source={require('../img/Agenda.png')}
          />
        ),
        tabBarLabel: "Agenda"
      }} 
      />
      <Tab.Screen name="Logout" component={LogoutScreen} options={{
        tabBarIcon: () => (
          <Image
            style={{ width: 30, height: 30, marginTop: 5, marginLeft: 5 }}
            tintColor={'#f48322'}
            source={require('../img/logout.png')}
          />
        ),
        tabBarLabel: "Logout"
      }} />
    </Tab.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerTransparent: true }}>
      <Stack.Screen
        options={{ title: "" }}
        name="Login"
        component={LoginUsuario}
      />
      <Stack.Screen
        options={{ title: "" }}
        name="CadastroPartida"
        component={CadastroPartida}
      />
      <Stack.Screen
        options={{ title: "" }}
        name="ListaJogos"
        component={MyTabs}
      />
      <Stack.Screen
        options={{ title: "" }}
        name="CadastroQuadra"
        component={CadastroQuadra}
      />
      <Stack.Screen
        options={{ title: "" }}
        name="DescricaoJogo"
        component={DescricaoJogo}
      />
      <Stack.Screen
        options={{ title: "" }}
        name="CadastroUsuario"
        component={CadastroUsuario}
      />
      <Stack.Screen
        options={{ title: "" }}
        name="ListaAgenda"
        component={ListaAgenda}
      />
    </Stack.Navigator>
  );
}

//container de navegação
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
