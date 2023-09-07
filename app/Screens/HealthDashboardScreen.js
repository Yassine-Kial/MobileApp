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
import StepsDashboard from '../Components/StepsDashboard';
import SleepDashboard from '../Components/SleepDashboard';
import HeartRateDashboard from '../Components/HeartRateDashboard';
import WeightMoodDashboard from '../Components/WeightMoodDashboard';
function HealthDashboardScreen(props)
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
                    

                    <View style={styles.headerTitleContainer}><Text style={styles.headerTitle}>Health Status</Text></View>


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

                <StepsDashboard time={'1 min ago'} steps={'2,271'} distance={'1.70 km'} calories={'65 kcal'} />
                <SleepDashboard time={'8:00 AM'} sleepScore={'80'} bedHour={'6'} bedMinute={'15'} deepBedHour={'1'} deepBedMinute={'18'} sleepStartTime={'1:59 AM'} sleepEndTime={'8:00 AM'} />
                <HeartRateDashboard time={'8:19 AM'} heartRate={'101'} heartStatus={'Light'} />
                <WeightMoodDashboard date={'Jul 30'} weight={'72.90'} weightStatus={'Normal'} moodStatus={'Very Good'} moodScore={'8/10'}/>

                
               

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
        backgroundColor: 'rgba(219,211,215,0.26)',
        height: '90%',
         alignItems: 'center',
        paddingTop : 20,
        
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
export default HealthDashboardScreen;