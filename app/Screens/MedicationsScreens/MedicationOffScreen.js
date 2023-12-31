import React from 'react';
import { SafeAreaView, View, StyleSheet,Text,TouchableOpacity } from 'react-native';
import Svg, { Circle, Path } from "react-native-svg";
import { StatusBar } from 'react-native';


import {
    useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from '@expo-google-fonts/poppins';


import RingDay from '../../Components/MedicationsComponents/RingDay';
import TubeDay from '../../Components/MedicationsComponents/TubeDay';

function MedicationOffScreen(props)
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
                    

                    <View style={styles.headerTitleContainer}><Text style={styles.headerTitle}>Medication</Text></View>


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

            
            <View style={styles.dashboardContainer}>

                <View style={styles.dashboard}>

                    
                    <View style={styles.dashboardLeftPart}>
                        <RingDay/>


                    </View>
                    <View style={styles.dashboardRightPart}>
                        <TubeDay day={'M'} />
                        <TubeDay day={'Tu'} />
                        <TubeDay day={'W'} />
                        <TubeDay day={'Th'} />
                        <TubeDay day={'F'} />
                        <TubeDay day={'Sa'} />
                        <TubeDay day={'Su'} />
                    </View>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.listIconContainer}>
                     <Svg
      width={100}
      height={100}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={50} cy={50} r={50} fill="#EDECED" />
      <Path
        d="M32.104 73.958a5.104 5.104 0 100-10.208 5.104 5.104 0 000 10.208z"
        fill="#461066"
      />
      <Path
        d="M47.417 33.125H76"
        stroke="#461066"
        strokeWidth={4.08333}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M32.104 37.208a5.104 5.104 0 100-10.208 5.104 5.104 0 000 10.208zM32.104 55.583a5.104 5.104 0 100-10.208 5.104 5.104 0 000 10.208z"
        fill="#461066"
      />
      <Path
        d="M47.417 51.5H76M47.417 69.875H76"
        stroke="#461066"
        strokeWidth={4.08333}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>

                </View>


                <View>

                    <Text style={styles.primaryText}>No data could be found for this patient.</Text>
                    <Text style={styles.secondaryText}>Add your first reminder !</Text>

                </View>



                <TouchableOpacity activeOpacity={0.6} style={styles.addReminderButton}>

                    <View style={styles.plusIconContainer}>
                        <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8 1v14M1 8h14"
        stroke="#461066"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
                    </View>
                    <View>
                        <Text style={styles.buttonText}>Reminder</Text>
                    </View>
                 </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    headerRightPartContainer: {
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        width: '18%',
        paddingRight: 10,
    },

    dashboardRightPart: {
        flexDirection: 'row',
        width: '50%',
        alignItems: 'center',
        paddingRight: 20,
    },
    dashboardLeftPart: {
        width : '50%',
        alignItems: 'center',
        justifyContent : 'center',
    },

    dashboard: {
        backgroundColor: '#fff',
        height: '80%',
        width: '90%',
        borderRadius: 8,
        flexDirection : 'row',
    },

    buttonText: {
        color : '#fff',
    },


    addReminderButton: {
        flexDirection: 'row',
        backgroundColor: '#461066',
        alignItems: 'center',
        borderRadius: 50,
        height : 45,
        paddingLeft: 10,
        paddingRight : 10,
        position: 'absolute',
        bottom: 40,
        shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
        
    },

    plusIconContainer: {
        alignItems: 'center',
        justifyContent : 'center',
        height: 25,
        width: 25,
        borderRadius: 12.5,
        backgroundColor: '#fff',
        marginRight : 10,
    },

    dashboardContainer: {
        backgroundColor: '#461066',
        height: '25%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    

    body: {
         height: '65%',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop : '25%'

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

    listIconContainer: {
        marginBottom : 50,
    }

    

})
export default MedicationOffScreen;