import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    //Global style
    
    imageBackground: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 0,
    },

    container: {
        paddingTop: 20,
        paddingHorizontal: 10,
    },
    
    listCW: {
        justifyContent: "space-between",
    },

    listPB: {
        paddingBottom: 20,
    },
    
    listItem: {
        marginBottom: '4%',
    },


    //Generations

    generationsBtnContainer: {
        width: '48%',
    },

    generationsBtn: {
        paddingVertical: '42%',
        backgroundColor: "#DF1818",
        alignItems: "center",
        borderRadius: 500,
        borderWidth: 3,
    },

    generationsBtnText: {
        fontFamily: 'Montserrat_700Bold',
        textTransform: "uppercase",
        color: "#FFF"
    },


    //Pokemons

    pokemonsImg: {
        width: '100%',
        height: 100,
        backgroundColor: "#FFF",
    },

    pokemonsCard: {
        borderWidth: 3,
        width: '32%',
    },

    pokemonsBtn: {
        backgroundColor: "#DF1818",
        alignItems: "center",
    },

    pokemonsBtnText: {
        fontFamily: 'Montserrat_700Bold',
        textTransform: "capitalize",
        color: "#FFF",
        paddingVertical: 10,
        paddingHorizontal: 5,
        fontSize: 12,
    },


    //Pokemon
    
    singleDataContainer: {
        marginBottom: 30,
    },

    imgContainer: {
        flexDirection: "row", 
        justifyContent: "space-between",
    },

    imgLabel: {
        textAlign: 'center',
        fontFamily: 'Montserrat_400Regular',
    },

    textValue: {
        fontSize: 20,
        textTransform: 'capitalize',
        fontFamily: 'Montserrat_400Regular',
    },

    subTitles: {
        fontSize: 16,
        fontFamily: 'Montserrat_700Bold',
        marginBottom: 15,
    }

});