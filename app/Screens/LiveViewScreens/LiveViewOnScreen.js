import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, StatusBar, SafeAreaView } from 'react-native';
import Svg, { Circle, Path } from "react-native-svg";
import { WebView } from 'react-native-webview';

import {
    useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from '@expo-google-fonts/poppins';

function LiveViewOnScreen(props)
{
    
    const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    });

     const raspberryPiIP = 'http://192.168.10.34:8080/?action=stream'; // Replace with your Raspberry Pi's IP address

    return (


            
                <View style={styles.streamContainer}>
        <WebView
          source={{ uri: raspberryPiIP }}
          style={styles.stream}
        />
      </View>
           
    );
}
const styles = StyleSheet.create({

     streamContainer: {
    height: 900, // Set the desired height
    width: '100%',
    borderRadius: 8,
    borderColor: 'red',
    borderWidth: 2,
  },
  stream: {
    flex: 1, // Make sure the WebView takes up all available space within its container
  },

    sleep: {
        position: 'absolute',
        top: 100,
        right : 150,
    },

     body: {
        backgroundColor: '#fff',
        height: '90%',
        alignItems: 'center',
        paddingTop : '40%',
    },

    headerRightPartContainer: {
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        width: '18%',
        paddingRight: 10,
    },

     header: {
        height: '10%',
        backgroundColor: '#461066',
        justifyContent: 'flex-end',
        paddingBottom: 7,
    },
    

    headerLeftPartContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        width: '18%',
        justifyContent: 'space-between',
        paddingLeft: 10,
    },

    headerContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },

    leftPartText: {
        color: '#fff',
        fontSize: 17,
        fontFamily :'Poppins_400Regular',

    },


    headerTitle: {
        color: '#fff',
        fontSize: 20,
        fontFamily :'Poppins_400Regular',
    },

    primaryText: {
        color: '#461066',
        textAlign: 'center',
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 20,
        marginBottom : 20,

    },

    secondaryText: {
        color: '#461066',
        textAlign: 'center',
        fontFamily: 'Poppins_500Medium',
        fontSize : 15,
    },

    bellIconContainer: {
        marginBottom : 50,
    },
    


})
export default LiveViewOnScreen;