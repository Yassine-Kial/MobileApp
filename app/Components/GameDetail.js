import React , {useState} from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import GeneralButtonReminder from '../Components/GeneralButtonReminder';

import {
    useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from '@expo-google-fonts/poppins';

const GameDetail = ({ closeModal, backgroundColor }) =>
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

      <View style={[styles.header,{backgroundColor}]}>
        <SafeAreaView>

        <View style={styles.upperText}>
                      <TouchableOpacity style={styles.cancelButton} onPress={closeModal}>
                          <View>
                              
                              <Svg
      width={34}
      height={33}
      viewBox="0 0 54 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M51.7 45.3c1.8 1.8 1.8 4.6 0 6.4-.9.9-2 1.3-3.2 1.3-1.2 0-2.3-.4-3.2-1.3L27 33.4 8.7 51.7c-.9.9-2 1.3-3.2 1.3-1.2 0-2.3-.4-3.2-1.3-1.8-1.8-1.8-4.6 0-6.4L20.6 27 2.3 8.7C.5 6.9.5 4.1 2.3 2.3 4.1.5 6.9.5 8.7 2.3L27 20.6 45.3 2.3c1.8-1.8 4.6-1.8 6.4 0 1.8 1.8 1.8 4.6 0 6.4L33.4 27l18.3 18.3z"
        fill="#fff"
      />
    </Svg>

                          </View>
            </TouchableOpacity>
          </View>
          
          





          </SafeAreaView>
      </View>



          <View style={styles.body}>
              
              <View style={styles.textContainer}>
                  <Text style={styles.title}>Fives</Text>
                  <Text style={styles.category}>Speed</Text>
                  <Text style={styles.description}>Fives is a complex word-discovery game,played against the clock. Make sure to keep plurals and past-tense in mind when searching for the right word!</Text>
                  <View style={styles.scoreContainer}>
                      <Text style={styles.bestScore}>Best Score</Text>
                      <Text style={styles.score}>0</Text>
                  </View>
              </View>

            <View style={styles.buttonContainer}><TouchableOpacity style={styles.playButton}><Text style={styles.buttonText}>Let's play</Text></TouchableOpacity>
</View>


      </View>
    </View>
      
    );
}

const styles = StyleSheet.create({

 





  cancelButton: {
    position: 'absolute',
      left: 20,
    top : 10,
  },
  container: {
    flex: 1,
  },
  header: {
    paddingTop : 15,
    borderTopRightRadius: 20,
    borderTopLeftRadius : 20,
    height :'40%',
  },
    body: {
    paddingLeft : '8%',
    height: '75%',
      backgroundColor: '#F0ECEC',
      paddingRight: '8%',
      paddingTop : '2%',
    },
    title: {
        fontSize: 35,
      marginBottom: 10,
        fontFamily : 'Poppins_700Bold',
    },
    category: {
      fontSize: 24,
      fontFamily : 'Poppins_500Medium',
      marginBottom: 10,
            color : '#461066',

    },
    bestScore: {
      fontSize: 24,
      color: '#461066',
      marginRight: '20%',
            fontFamily : 'Poppins_500Medium',

        
    },
    score: {
      fontSize: 20,  
      color: '#461066',
            fontFamily : 'Poppins_500Medium',


    },
    description: {
      fontSize: 17,
      color : 'gray',
  },   
    
  buttonContainer: {
      alignItems : 'center',
    marginTop: '50%',
      
  },
  
  playButton: {
    backgroundColor: '#461066',
    paddingLeft: '7%',
    paddingRight: '7%',
    paddingTop: '2%',
    paddingBottom: '2%',
    borderRadius : 6,
  },
  buttonText: {
    fontSize: 25,
    color : '#fff',
  },

  scoreContainer: {
    marginTop : '5%',
    flexDirection: 'row',
    alignItems :'center',
    
  },
})
export default GameDetail;