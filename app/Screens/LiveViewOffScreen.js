import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, StatusBar, SafeAreaView } from 'react-native';
import Svg, { Circle, Path } from "react-native-svg";

import {
    useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from '@expo-google-fonts/poppins';

function LiveViewOffScreen(props)
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
                    
                    <TouchableOpacity activeOpacity={0.2} style={styles.headerLeftPartContainer}>
                        <View style={styles.iconContainer}>
                            <Svg
                                width={17}
                                height={28}
                                viewBox="0 0 17 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                {...props}
                                >
                                <Path
                                    d="M.65 15.592L12.475 27.26c.83.834 2.077.837 2.91.007.834-.83.836-2.077.007-2.91L5.228 13.939 15.437 3.568c.833-.83.836-2.077.006-2.91-.415-.417-.83-.626-1.454-.627-.623-.002-1.04.205-1.456.62L.658 12.266c-.834 1.038-.837 2.285-.007 3.326 0-.208 0-.208 0 0z"
                                    fill="#fff"
                                />
                            </Svg>
                        </View>
                            <View><Text style={styles.leftPartText}>Back</Text></View>
                    </TouchableOpacity>
                    

                    <View style={styles.headerTitleContainer}><Text style={styles.headerTitle}>Live View</Text></View>


                    <TouchableOpacity activeOpacity={0.2} style={styles.headerRightPartContainer}>
                        <View style={styles.iconContainerRight}>
                            <Svg
                                    width={26}
                                    height={26}
                                    viewBox="0 0 26 26"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    {...props}
                                    >
                                    <Path
                                        d="M13 0a13 13 0 1013 13A13.014 13.014 0 0013 0zm0 23.4A10.4 10.4 0 1123.4 13 10.412 10.412 0 0113 23.4zm0-11.05a1.3 1.3 0 00-1.3 1.3v3.9a1.3 1.3 0 002.6 0v-3.9a1.3 1.3 0 00-1.3-1.3zm0-5.2a1.625 1.625 0 100 3.25 1.625 1.625 0 000-3.25z"
                                        fill="#fff"
                                    />
                                    </Svg>
                           </View>
                    </TouchableOpacity>


                </SafeAreaView>

            </View>


            <View style={styles.body}>
                
                <View style={styles.sleep}>

                    <Svg
      width={44}
      height={68}
      viewBox="0 0 44 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3.66 50.9h4.53V53H.75v-1.95l4.5-6.48H.75v-2.1h7.44v1.95L3.66 50.9zM17.88 37.2h6.04V40H14v-2.6l6-8.64h-6v-2.8h9.92v2.6l-6.04 8.64zM34.856 24.64h7.248V28H30.2v-3.12l7.2-10.368h-7.2v-3.36h11.904v3.12L34.856 24.64z"
        fill="#461066"
      />
    </Svg>
                </View>


                <View style={styles.bellIconContainer}>

                    <Svg
      width={99}
      height={93}
      viewBox="0 0 99 93"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16.386 3.875c-6.787 0-12.29 5.204-12.29 11.625v42.625c0 6.42 5.503 11.625 12.29 11.625h4.096v13.895c0 3.026 2.594 5.48 5.794 5.48 1.536 0 3.01-.578 4.096-1.605l18.785-17.77h16.386c6.787 0 12.29-5.205 12.29-11.625V15.5c0-6.42-5.502-11.625-12.29-11.625H16.386z"
        fill="#5D2E79"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M77.832 52.77V20.855l10.458-4.946a4.3 4.3 0 013.986.17c1.207.706 1.943 1.953 1.943 3.296V54.25c0 1.343-.736 2.59-1.943 3.296a4.3 4.3 0 01-3.986.17l-10.458-4.947zm-36.867-4.333c6.787 0 12.289-5.204 12.289-11.625 0-6.42-5.502-11.625-12.29-11.625-6.787 0-12.289 5.205-12.289 11.625s5.502 11.625 12.29 11.625z"
        fill="#461066"
      />
    </Svg>

                </View>


                <View>

                    <Text style={styles.primaryText}>Live view is having a siesta.</Text>
                    <Text style={styles.secondaryText}>Wishing you a wonderful day !</Text>


                </View>


            </View>
    
            


            

            


        </View>
    );
}


const styles = StyleSheet.create({

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
export default LiveViewOffScreen;