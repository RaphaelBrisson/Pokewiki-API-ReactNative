import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ImageBackground, FlatList, Text, View, Image } from 'react-native';
import styles from '../style.js';


// Détail d'un pokémon en particulier
export default function Pokemon({ route, navigation }) {
  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const params = route.params;
  let pokemon_request = 'https://pokeapi.co/api/v2/pokemon/' + params.name;

  useEffect(() => {
      // Requête vers l'API
      fetch(pokemon_request)
      .then((response) => response.json())
      .then((json) => {
          setData(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  
  
  return (
    <View>
      {isLoading ? <ActivityIndicator/> : (
        <ImageBackground source={require('../assets/background.png')} style={[{width: '100%', height: '100%'} ,styles.imageBackground]} imageStyle={{resizeMode: 'cover'}}>
          <View style={styles.container}>
            <View style={styles.singleDataContainer}>
              <Text style={styles.subTitles}>Name</Text>
              <Text style={styles.textValue}>{data.name}</Text>
            </View>
            <View style={styles.singleDataContainer}>
              <Text style={styles.subTitles}>Pokédex number</Text>
              <Text style={styles.textValue}>#{data.id}</Text>
            </View>
            <View style={styles.singleDataContainer}>
              <Text style={styles.subTitles}>Types</Text>
              <FlatList
                ItemSeparatorComponent={() => <Text style={styles.textValue}> - </Text>}
                horizontal={true}
                data={data.types}
                keyExtractor={(item, index) => 'key'+index}
                renderItem={({ item }) => (<Text style={styles.textValue}>{item.type.name}</Text> )}
              />
            </View>
            <View style={styles.singleDataContainer}>
              <Text style={styles.subTitles}>Appearance</Text>
              <View style={styles.imgContainer}>
                <View>
                  <Text style={styles.imgLabel}>Classic</Text>
                  <Image
                    style={{ width: 150, height: 150 }}
                    source={{
                      uri: (data.sprites.front_default),
                    }}
                  />
                </View>
                <View>
                  <Text style={styles.imgLabel}>Shiny</Text>
                  <Image
                    style={{ width: 150, height: 150 }}
                    source={{
                      uri: (data.sprites.front_shiny),
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      )}
    </View>
  );
}
