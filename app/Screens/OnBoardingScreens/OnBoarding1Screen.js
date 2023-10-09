import React from 'react';
import { Image, SafeAreaView,StyleSheet, View,Text, TouchableOpacity } from 'react-native';
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import {
    useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from '@expo-google-fonts/poppins';
import MementoImage from '../../assets/Images/MementoImage';
function OnBoarding1Screen(props)
{
    
     const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
     });
    
    

    return (
      <SafeAreaView style={styles.OnBoardingScreen1Container}>
        
            {/* <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')}/>
            </View>  */}
            

            <View style={styles.primaryTextContainer}>
                <Text>
                    <Text style={styles.OnBoardingPrimaryText}>Hi there, I'am </Text>
                    <Text style={styles.OnBoardingPrimaryHighlitedText}>Memento</Text>
                    </Text>
            </View>

            <View style={styles.imageContainer}>
                <MementoImage/>
            </View>

            <View style={styles.descriptionTextContainer}>
                <Text style={styles.OnBoardingDescriptionText}>We're here to improve each day for Alzheimer's patients and caregivers.</Text>
            </View>

            {/* 
            <View style={styles.pointsContainer}>
                <View style={styles.pointHighlight}></View>
                <View style={styles.point}></View>
                <View style={styles.point}></View>
                <View style={styles.point}></View>
                <View style={styles.point}></View>
            </View>


             
             <View>
                <TouchableOpacity activeOpacity={0.7} style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Sign in</Text>
                </TouchableOpacity>
            </View> */}
            

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({

  descriptionTextContainer: {
    height: 160,
    alignItems: 'center',
  },

    OnBoardingScreen1Container: {

        flex: 1,
        alignItems: 'center',
        
    },
    logo: {
        height: 100,
        width: 110,
  },
    
    primaryTextContainer: {
        paddingLeft: 20,
      paddingRight: 20,
      height: 100,
            justifyContent : 'center'

    },  
         
    OnBoardingPrimaryText: {

        color: '#461066',
        fontFamily: 'Poppins_500Medium',
        fontSize: '30',
    },

    OnBoardingPrimaryHighlitedText: {

        color: '#BA68C8',
        fontFamily: 'Poppins_500Medium',
        fontSize: '30',
        
  },
    
  imageContainer: {
    height: 500,
    justifyContent : 'center',
    },

    OnBoardingDescriptionText: {
        textAlign: 'center',
        color: '#A19797',
        fontFamily: 'Poppins_400Regular',
      fontSize: 16,
        paddingTop : 100 , 

    },

    loginButton: {
        backgroundColor: '#461066',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 180,
        paddingRight: 180,
        borderRadius: 3,
    },

    loginButtonText: {
        color: '#fff',
        fontFamily: 'Poppins_500Medium',
    },

    pointsContainer: {
        width : 150,
        flexDirection: 'row',
        justifyContent : 'space-evenly'
    },

    pointHighlight: {
        backgroundColor: '#461066',
        height : 8,
        width: 8,
        borderRadius :5,
    },
    point :{
    backgroundColor: '#BA68C8',
        height : 8,
        width: 8,
        borderRadius :5,
    } 
})

export default OnBoarding1Screen;