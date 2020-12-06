import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ImageBackground, FlatList, Text, View, Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import styles from '../style.js';


// Liste de tous les pokémons
export default function Pokemons({ route, navigation }) {
  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const params = route.params;
  
  // Set offset pour toutes les générations
  let offset;
  switch (params.name) {
    case 'generation-i':
      offset = 1;
      break;
    case 'generation-ii':
      offset = 152;
      break;
    case 'generation-iii':
      offset = 252;
      break;
    case 'generation-iv':
      offset = 387;
      break;
    case 'generation-v':
      offset = 494;
      break;
    case 'generation-vi':
      offset = 650;
      break;
    case 'generation-vii':
      offset = 722;
      break;
    case 'generation-viii':
      offset = 810;
      break;
    default:
  }

  const imgBaseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  useEffect(() => {
      // Requête vers l'API
      fetch(params.url)
      .then((response) => response.json())
      .then((json) => {
          setData(json.pokemon_species);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  // On extrait l'ID de l'URL et on l'ajoute dans le tableau "data"
  data.forEach((element, index) => {
    let urlID = element['url'].split("/");
    data[index]['id'] = urlID[urlID.length-2];
  });

  // On trie le tableau en fonction de l'ID
  data.sort(function(a, b) {
    return a['id'] - b['id'];
  });


  return (
    <View>
      {isLoading ? <ActivityIndicator/> : (
        <ImageBackground source={require('../assets/background.png')} style={[{width: '100%', height: '100%'} ,styles.imageBackground]} imageStyle={{resizeMode: 'cover'}}>
          <FlatList
            data={data}
            numColumns={3}
            style={styles.container}
            contentContainerStyle={styles.listPB}
            columnWrapperStyle={styles.listCW}
            keyExtractor={(item, index) => 'key'+index}
            renderItem={({ item, index }) => (
              <View style={[styles.listItem, styles.pokemonsCard]}>
                <TouchableHighlight
                  activeOpacity={1}
                  underlayColor= '#000'
                  onPress={() => {                  
                    navigation.navigate('Pokémon', {
                      name: item.name,             
                    });
                  }}
                >
                  <View style={styles.pokemonsBtn} >
                    <Image
                    style={styles.pokemonsImg}
                    source={{
                      uri: (imgBaseUrl + (index + offset) + '.png'),
                    }}/>
                    <Text style= {styles.pokemonsBtnText} >{item.name}</Text>
                  </View>
                </TouchableHighlight>
              </View>
            )}
          />
        </ImageBackground>
        )}
    </View>
  );
}
