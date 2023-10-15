import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, StatusBar, SafeAreaView } from 'react-native';
import Svg, { Circle, Path } from "react-native-svg";
import  { Mask, G } from "react-native-svg"
import {
    useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from '@expo-google-fonts/poppins';
import LastRecord from '../Components/LastRecord';
import { ScrollView } from 'react-native-gesture-handler';
import EmotionSurvey from '../Components/EmotionSurvey';
import AvatarImage from '../assets/Images/AvatarImage';
function HomeScreen({navigation})
{
    const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    });
    return (
        <View>
            <StatusBar
                barStyle="light-content" />
            <View style={styles.header}>
                <SafeAreaView style={styles.headerContent}>
                    <TouchableOpacity activeOpacity={0.2} style={styles.headerLeftPartContainer} onPress={() => navigation.navigate('Profile')}>
                        <View style={styles.iconContainer}>
                            <Svg
      width={28}
      height={35}
      viewBox="0 0 28 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M14.007 17.708c4.18 0 7.57-3.516 7.57-7.854S18.187 2 14.007 2s-7.57 3.516-7.57 7.854 3.39 7.854 7.57 7.854z"
        stroke="#fff"
        strokeWidth={2.37638}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M2 28.631a3.756 3.756 0 01.348-1.595c.725-1.504 2.77-2.302 4.466-2.663a25.706 25.706 0 013.713-.542c2.31-.21 4.635-.21 6.946 0 1.248.091 2.488.272 3.712.542 1.697.361 3.741 1.083 4.466 2.663a3.858 3.858 0 010 3.205c-.725 1.58-2.77 2.302-4.466 2.648a24.04 24.04 0 01-3.712.557c-1.881.165-3.77.195-5.656.09-.435 0-.855 0-1.29-.09a23.591 23.591 0 01-3.698-.557c-1.711-.346-3.741-1.068-4.48-2.648A3.865 3.865 0 012 28.631z"
        stroke="#fff"
        strokeWidth={2.37638}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
                </Svg>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.headerTitleContainer}><Text style={styles.headerTitle}>Home</Text></View>
                    <TouchableOpacity activeOpacity={0.2} style={styles.headerRightPartContainer} onPress={() => navigation.navigate('NotificationsOnScreen')}>
                        <View style={styles.iconContainerRight}>
                            <Svg
      width={24}
      height={32}
      viewBox="0 0 24 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M23.532 23.608l-2.04-2.059v-7.98c0-4.901-2.595-9.004-7.119-10.09V2.395A2.38 2.38 0 0012 0a2.38 2.38 0 00-2.372 2.394V3.48c-4.54 1.085-7.119 5.172-7.119 10.088v7.981L.47 23.61c-.997 1.005-.3 2.729 1.107 2.729h20.832c1.424 0 2.12-1.724 1.124-2.73zm-5.204-.463H5.673v-9.577c0-3.959 2.389-7.183 6.327-7.183 3.939 0 6.328 3.224 6.328 7.183v9.577zM12 31.127c1.74 0 3.164-1.437 3.164-3.193H8.837c0 1.756 1.408 3.193 3.163 3.193z"
        fill="#fff"
      />
    </Svg>
                           </View>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        <View style={styles.body}>

          <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>

            <View style={styles.oldManContainer}>

            <View style={styles.welcomeTextContainer}>
              <Text style={styles.welcomeText}>Welcome back Mouad !
              </Text>
            </View>
              <AvatarImage/>
          </View>
            <LastRecord />
            <EmotionSurvey />
                        <EmotionSurvey/>
                        <EmotionSurvey/>
                        <EmotionSurvey/>
          </ScrollView>
        </View>
        </View>
    );
}
const styles = StyleSheet.create({

  scrollContainer: {
    width: '100%',
    flexDirection: 'column',
    paddingLeft : 20,
  },

  welcomeTextContainer: {
    paddingLeft : 20,
    width: '100%',
    paddingTop : 10,
  },

  welcomeText: {
    fontSize: 18,
    fontWeight : 'bold',
  },
  oldManContainer: {
    backgroundColor: '#fff',
    width: '95%',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 10,
    marginBottom: 10,
    marginTop : 10,
  },
  body: {
        backgroundColor: 'rgba(219,211,215,0.26)',
        height: '90%',
       alignItems: 'center',
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
export default HomeScreen;