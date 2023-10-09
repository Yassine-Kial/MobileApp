import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import {
    useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from '@expo-google-fonts/poppins';
import GamesImage from '../../assets/Images/GamesImage';

const GamesInfo = ({toggleModal}) => 
{
    const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    });


    return (
        <View style={styles.container}>

            <View style={styles.video}>

                <GamesImage/>


            </View>

            <View style={styles.textContainer}>
                <Text style={styles.games}>Games</Text>
                <Text style={styles.description}>Based on world-leading science, the MindMate App helps stimulate the brain with fun, interactive games.</Text>


            </View>


            <TouchableOpacity onPress={toggleModal} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>



            
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '60%',
        width : '80%',
        borderRadius: 5,
        alignItems: 'center',
        paddingTop: '20%',
        paddingLeft: '5%',
        paddingRight : '5%',
    },
    video: {
        height: '45%',
        width: '100%',
        justifyContent: 'center',
        alignItems : 'center',
   },

    buttonText: {
        color: '#fff',
        fontSize : 20,
    },

    textContainer: {
        marginTop : '25%',
    },
    buttonContainer: {
        paddingTop: '3%',
        paddingBottom : '3%',
        marginTop : '4%',
        width: '100%',  
        backgroundColor: '#821655',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius : 5,
    },
    games: {
        fontSize: 25,
        fontFamily: 'Poppins_600SemiBold',
        color : '#821655',           
    },
    description: {
        marginTop: '2%',
        fontSize : 17,
        color : 'gray',
    },
})
export default GamesInfo;