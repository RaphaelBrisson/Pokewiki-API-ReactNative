import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ImageBackground, FlatList, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import styles from '../style.js';



// Liste de tous les pokémons
export default function Generations({ navigation }) {
   
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        // Requête vers l'API
        fetch('https://pokeapi.co/api/v2/generation/')
        .then((response) => response.json())
        .then((json) => {
            setData(json.results);
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

    return (
      <View>
        {isLoading ? <ActivityIndicator/> : (
          <ImageBackground source={require('../assets/background.png')} style={[{width: '100%', height: '100%'} ,styles.imageBackground]} imageStyle={{resizeMode: 'cover'}}>
            <FlatList
              data={data}
              numColumns={2}
              style={styles.container}
              columnWrapperStyle={styles.listCW}
              keyExtractor={(item, index) => 'key'+index}
              renderItem={({ item, index }) => (
                <View style={styles.listItem}>
                  <TouchableHighlight
                    style={styles.generationsBtn}
                    activeOpacity={1}
                    underlayColor= '#000'
                    onPress={() => {                  
                      navigation.navigate('Pokémons', {
                        url: item.url,
                        name: item.name,         
                      });
                    }}
                  >
                    <Text style= {styles.generationsBtnText} >{item.name}</Text>
                  </TouchableHighlight>
                </View>
              )}
            />
            
          </ImageBackground>
        )}
      </View>
    );
}
