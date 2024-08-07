import React from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Supondo que você tenha uma função para limpar os dados de sessão/cache
const clearSession = async () => {
  // Limpe os dados de sessão/cache aqui
};

const LogoutScreen = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', e => {
      // Impede a ação padrão
      e.preventDefault();

      Alert.alert("Logout", "Você deseja sair?", [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Sair",
          onPress: async () => {
            await clearSession();
            // Navegue para a tela de login ou qualquer tela inicial após o logout
            navigation.navigate('Login');
          }
        }
      ]);
    });

    return unsubscribe;
  }, [navigation]);

  // Retorna um componente vazio, pois a lógica de logout é tratada no useEffect
  return null;
};

export default LogoutScreen;