import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ActivityIndicator, FlatList, Text, View, Button } from 'react-native';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const Stack = createStackNavigator();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=4')
      .then((response) => response.json())
      .then((json) => {
        setData(json.results);
        console.log(json.results);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
      
  }, []);

  function Pokemons({ navigation }) {
    return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={(item, index) => 'key'+index}
            renderItem={({ item, index }) => (
              <Text>{item.name}, {item.url}, {index}
              <Button
                title="Go to Pokemon"
                onPress={() => {
                  navigation.navigate('Pokemon', {
                    index: {index},
                  });
                }}
              />
              </Text>
            )}
          />
        )}
        
      </View>
    );
  }

  function Pokemon({ route, navigation }) {
    const { index } = route.params;
    return (
      <View style={{ flex: 1, padding: 24 }}>
        <Text>Pokémon SINGLE</Text>
        <Text>{index}</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pokemons">
        <Stack.Screen name="Pokemons" component={Pokemons} />
        <Stack.Screen name="Pokemon" component={Pokemon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};