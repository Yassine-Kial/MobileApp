import React , {useState, useEffect} from 'react';
import { SafeAreaView, View, StyleSheet,Text,TouchableOpacity, ScrollView } from 'react-native';
import Svg, {Path } from "react-native-svg";
import { StatusBar } from 'react-native';
import {
    useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from '@expo-google-fonts/poppins';
import NotificationCard from '../../Components/NotificationsComponents/NotificationCard';
import ReminderCard from '../../Components/ReminderCard';
function NotificationsOnScreen(props)
{ 
    const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    });



   // const notifications = [
      //  { time: "1m", content: "Patient has taken their medication on time", backgroundColor: "red", title: "Medication alert" },
        //        { time: "1m", content: "Patient has taken their medication on time", backgroundColor: "red", title: "Medication alert" },

        // Add more notification objects as needed
    //];


    const [notifications, setNotifications] = useState([]); // State to store retrieved notifications



     useEffect(() => {
    // Function to retrieve notifications
    const getNotifications = async () => {
      try {
        const response = await fetch('http://192.168.8.172:5000/getNotification'); // Replace with your server URL
        if (response.ok) {
          const data = await response.json();
          setNotifications(data);
        } else {
          console.error('Failed to fetch notifications');
        }
      } catch (error) {
        console.error(error);
      }
    };

    getNotifications(); // Call the getNotifications function when the component mounts
  }, []);



    return (
        <View style = {styles.god}>
            <StatusBar
                barStyle="light-content"  // Use "dark-content" for light background
                        />
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
                    <View style={styles.headerTitleContainer}><Text style={styles.headerTitle}>Notifications</Text></View>
                    <TouchableOpacity activeOpacity={0.2} style={styles.headerRightPartContainer}>
                        <View style={styles.iconContainerRight}>
                            <Svg
                                width={19}
                                height={19}
                                viewBox="0 0 19 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                {...props}
                                >
                                <Path
                                    d="M1.405 4.074h2.673a2.683 2.683 0 005.196 0h8.35a.656.656 0 000-1.311h-8.35a2.683 2.683 0 00-5.195 0H1.405a.655.655 0 100 1.31zm5.271-2.027a1.372 1.372 0 110 2.743 1.372 1.372 0 010-2.743zm10.947 6.798H14.95a2.682 2.682 0 00-5.195 0h-8.35a.655.655 0 100 1.31h8.35a2.683 2.683 0 005.195 0h2.673a.655.655 0 100-1.31zm-5.27 2.027a1.372 1.372 0 110-2.744 1.372 1.372 0 010 2.744zm5.27 4.054h-8.35a2.683 2.683 0 00-5.194 0H1.405a.656.656 0 000 1.311h2.673a2.682 2.682 0 005.196 0h8.35a.656.656 0 000-1.31zM6.676 16.953a1.371 1.371 0 110-2.742 1.371 1.371 0 010 2.742z"
                                    fill="#fff"
                                    stroke="#fff"
                                    strokeWidth={0.5}
                                />
                                </Svg>
                           </View>
                            <View><Text style={styles.rightPartText}>Filter</Text></View>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
            <View style={styles.body}>


                <ScrollView>

                {notifications.map((notification, index) => (
                    <NotificationCard
                        key={index}
                        time={notification.time}
                        content={notification.content}
                        backgroundColor={notification.backgroundColor}
                        title={notification.title}
                    />
                ))}

                </ScrollView>
               
                </View>
        </View>
    );
}
const styles = StyleSheet.create({
     rightPartText: {
        color: '#fff',
        fontSize: 17,
        fontFamily :'Poppins_400Regular',
    },
    headerRightPartContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        width: '18%',
        justifyContent: 'space-between',
        paddingRight: 10,
    },
    header: {
        height: '10%',
        backgroundColor: '#461066',
        justifyContent: 'flex-end',
        paddingBottom: 7,
    },


    notification: {
        flexDirection: 'row',
        width: '100%',
        height :'12%',
        alignItems: 'center',
        paddingLeft : 8,

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
        backgroundColor: 'red',
        marginRight : 8,
    },

    notificationMiddleSection: {
        paddingTop : 5,
        height :'100%',
        width :'75%',
        flexDirection: 'column',
    },

    notificationRightSection: {
        paddingTop: 5,
        paddingRight : 8,

        flex : 1,
        height : '100%',
        flexDirection: 'column',
        alignItems: 'center',
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
    body: {
        backgroundColor: '#fff',
        height : '90%',
    },
})
export default NotificationsOnScreen;