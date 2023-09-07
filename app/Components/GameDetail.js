import React , {useState} from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import GeneralButtonReminder from '../Components/GeneralButtonReminder';
const GameDetail = ({ closeModal }) =>
{
  return (
      
    <View style={styles.container}>

      <View style={styles.header}>
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
                  <Text>
                      <Text style={styles.bestScore}>Best Score</Text>
                      <Text style={styles.score}>0</Text>
                  </Text>
              </View>

            <View style={styles.buttonContainer}><TouchableOpacity style={styles.playButton}><Text>Let's play</Text></TouchableOpacity>
</View>


      </View>
    </View>
      
    );
}

const styles = StyleSheet.create({

  saveButtonContainer: {
    marginTop : 40,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '100%',
    flex: 1,
    paddingTop : 20,
  },



  loginButton: {
        backgroundColor: '#821655',
        
        paddingLeft: 180,
        paddingRight: 180,
      borderRadius: 3,
    marginBottom: 40,
    height: 40,
    justifyContent: 'center',
    alignItems : 'center',
    },

    loginButtonText: {
        color: '#fff',
      fontFamily: 'Poppins_500Medium',
        fontSize : 20
    },

  generalSection: {
    backgroundColor: '#F0ECEC',
    height: '8%',
    paddingLeft: '2%',
    paddingTop: '5%',
    paddingLeft : '6%',    
  },

  

  iconSection: {
    flexDirection : 'row',
    justifyContent: 'center', 
    marginTop : 30,
  },
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
    backgroundColor: '#821655',
    height :'40%',
  },
 

    body: {
    paddingLeft : '8%',
    height: '75%',
    backgroundColor : '#F0ECEC',
    },
    
    title: {

        fontSize: 35,
        fontWeight: 'bold',
        marginBottom : 10,
        
    },

    category: {
        fontSize: 24,
                marginBottom : 10,

        
    },

    bestScore: {
        fontSize: 24,
        
    },

    score: {
        fontSize: 20,        
    },
    description: {
        fontSize: 17,
    },

  


   
})
export default GameDetail;