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
import NotificationActivity from '../../assets/Icons/NotificationActivity';
import NotificationPill from '../../assets/Icons/NotificationPill';

 const  NotificationCard = ({title,content,time,backgroundColor}) =>
{ 
    const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    });
     
     


     
     return (
             
             
             
        <View style={styles.notification}>
             <View style={[styles.notificationleftSection, { backgroundColor }]}>
                 <NotificationPill/>
                    </View>
                    <View style={styles.notificationMiddleSection}>
                <Text style={styles.notificationTitle}>{title}</Text>
                <Text style={styles.notificationContent}>{content}</Text>
                    </View>


                    <View style={styles.notificationRightSection}>

                <Text style={styles.notificationTime}>{time}</Text>
                        <TouchableOpacity>

                            <Svg
                                width={14}
                                height={3}
                                viewBox="0 0 14 3"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <Path
                                    d="M6.75 3a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 3a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 3a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                                    fill="#968A8A"
                                />
                            </Svg>

                        </TouchableOpacity>


                    </View>

             </View>

    );
}

const styles = StyleSheet.create({
     notification: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 8,
        borderBottomColor: 'rgba(150,138,138,0.2)',
        borderBottomWidth: 1,
        paddingTop: 8,
        paddingBottom: 8,
    },

    notificationTitle: {
        fontSize: 15,
        fontFamily: 'Poppins_500Medium',
        marginBottom : 7,
    },

    notificationContent: {
        fontSize: 12,
        fontFamily : 'Poppins_400Regular',
    },

    notificationTime: {
        color: '#968A8A',
        marginBottom : 20,
    },

    notificationleftSection: {
        width: 70,
        height :70,
        borderRadius: 35,
        marginRight: 8,
        justifyContent: 'center',
        alignItems : 'center',
    },

    notificationMiddleSection: {
        paddingTop : 15,
        height :'100%',
        width :'75%',
        flexDirection: 'column',
    },

    notificationRightSection: {
        paddingTop: 15,
        paddingRight : 8,

        flex : 1,
        height : '100%',
        flexDirection: 'column',
        alignItems: 'center',
    },

})
export default NotificationCard;