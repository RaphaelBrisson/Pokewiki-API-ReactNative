import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { AppLoading } from 'expo';

// Components
import Generations from './components/Generations';
import Pokemons from './components/Pokemons';
import Pokemon from './components/Pokemon';


export default App = () => {

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const Stack = createStackNavigator();

  // Navigation
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Generations">
        <Stack.Screen name="Generations" component={Generations} options={{headerTitleStyle: {fontFamily: 'Montserrat_400Regular'}}} />
        <Stack.Screen name="Pokémons" component={Pokemons} options={{headerTitleStyle: {fontFamily: 'Montserrat_400Regular'}}} />
        <Stack.Screen name="Pokémon" component={Pokemon} options={{headerTitleStyle: {fontFamily: 'Montserrat_400Regular'}}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
