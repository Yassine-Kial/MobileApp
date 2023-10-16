import React , {useState, useEffect} from 'react';
import { SafeAreaView, View, StyleSheet,Text,TouchableOpacity, ScrollView } from 'react-native';
import Svg, {Path, Circle } from "react-native-svg";
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
function NotificationsOnScreen({navigation})
{ 
    const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    });

  
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


    
      const notificationsEmpty = notifications.length === 0;
    return (
        <View style = {styles.god}>
            <StatusBar
                barStyle="light-content"  // Use "dark-content" for light background
                        />
            <View style={styles.header}>
                <SafeAreaView style={styles.headerContent}>
                    <TouchableOpacity activeOpacity={0.2} style={styles.headerLeftPartContainer} onPress={() => navigation.goBack()} >
                        <View style={styles.iconContainer}>
                            <Svg
                                width={17}
                                height={28}
                                viewBox="0 0 17 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
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
            <View style={notificationsEmpty ? styles.nobody : styles.body}>


{notifications.length > 0 ? (
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
) : (
  <View style={styles.nobody}>
    <View style={styles.bellIconContainer}>
       <Svg
                        width={150}
                        height={150}
                        viewBox="0 0 150 150"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <Circle cx={75} cy={75} r={75} fill="#EDECED" />
                        <Path
                            d="M74.428 104.714c0-.476.239-.714.715-.714 1.756 0 3.266-.632 4.531-1.897 1.265-1.265 1.897-2.776 1.897-4.532 0-.476.239-.714.715-.714s.714.238.714.714c0 2.173-.766 4.026-2.3 5.558-1.532 1.533-3.385 2.3-5.557 2.3-.476 0-.715-.239-.715-.715zm29.733-12.857H46.125C54.042 82.93 58 70.547 58 54.714c0-1.518.357-3.08 1.071-4.687.715-1.607 1.741-3.14 3.08-4.598 1.34-1.459 3.148-2.657 5.425-3.594 2.277-.938 4.799-1.406 7.567-1.406s5.29.468 7.567 1.406c2.277.937 4.085 2.135 5.424 3.594 1.34 1.458 2.366 2.99 3.08 4.598.715 1.607 1.072 3.17 1.072 4.687 0 15.834 3.958 28.215 11.875 37.143zm-66.161 0c0 1.548.565 2.887 1.696 4.018 1.131 1.131 2.47 1.696 4.018 1.696h20c0 3.155 1.116 5.849 3.348 8.081 2.233 2.232 4.926 3.348 8.08 3.348 3.156 0 5.849-1.116 8.081-3.348 2.232-2.232 3.348-4.926 3.348-8.08h20c1.548 0 2.887-.566 4.018-1.697 1.131-1.131 1.697-2.47 1.697-4.018a39.21 39.21 0 01-4.063-3.928c-1.22-1.37-2.485-3.148-3.794-5.335a40.024 40.024 0 01-3.326-7.076c-.908-2.53-1.652-5.595-2.232-9.197-.58-3.6-.871-7.47-.871-11.607 0-4.523-1.741-8.727-5.223-12.611-3.482-3.884-8.05-6.243-13.706-7.076a4.446 4.446 0 00.358-1.741c0-1.19-.417-2.203-1.25-3.036-.834-.833-1.846-1.25-3.036-1.25s-2.203.417-3.036 1.25c-.833.833-1.25 1.845-1.25 3.036 0 .595.12 1.175.357 1.74-5.654.834-10.223 3.193-13.705 7.077-3.482 3.884-5.223 8.087-5.223 12.611 0 4.137-.29 8.006-.87 11.607-.581 3.602-1.325 6.667-2.233 9.197a40.111 40.111 0 01-3.326 7.076c-1.31 2.187-2.574 3.966-3.795 5.335A39.213 39.213 0 0138 91.857z"
                            fill="#461066"
                        />
                    </Svg>
    </View>
    <View>
      <Text style={styles.primaryText}>You don't have any notifications.</Text>
      <Text style={styles.secondaryText}>Have a nice day!</Text>
    </View>
  </View>
)}


               
                </View>
        </View>
    );
}
const styles = StyleSheet.create({

    nobody: {

        backgroundColor: '#fff',
        height: '90%',
        alignItems: 'center',
        paddingTop : '20%',
        
    },


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
export default NotificationsOnScreen;