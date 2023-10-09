import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GettingStartedScreen from './app/Screens/GettingStartedScreen';
import OnBoarding1Screen from './app/Screens/OnBoardingScreens/OnBoarding1Screen';
import OnBoardingAllScreen from './app/Screens/OnBoardingScreens/OnBoardingAllScreen';
import NotificationsOffScreen from './app/Screens/NotificationsScreens/NotificationsOffScreen';
import NotificationsOnScreen from './app/Screens/NotificationsScreens/NotificationsOnScreen';
import MedicationOffScreen from './app/Screens/MedicationsScreens/MedicationOffScreen';
import MedicationOnScreen from './app/Screens/MedicationsScreens/MedicationOnScreen';
import AddReminderScreen from './app/Screens/MedicationsScreens/AddReminderScreen';
import GeneralButtonReminder from './app/Components/MedicationsComponents/GeneralButtonReminder';
import PickerOption from './app/Components/MedicationsComponents/PickerOption';
import PlusIcon from './app/Components/PlusIcon';
import Header from './app/Components/Header';
import LiveViewOffScreen from './app/Screens/LiveViewScreens/LiveViewOffScreen';
import HealthDashboardScreen from './app/Screens/HealthDashboardScreen';
import GamesScreen from './app/Screens/GamesScreen/GamesScreen';
import AddGameScreen from './app/Components/AddGameScreen';


import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './app/Screens/HomeScreen';
import PrimaryScreen from './app/Screens/PrimaryScreen';
import Profile from './app/Components/Profile';

 
export default function App()
{

  const Stack = createStackNavigator();

  return (
     <NavigationContainer>
            <Stack.Navigator
      initialRouteName="OnBoardingAllScreen"
      screenOptions={{
      headerShown: false,
    }}
      >
        <Stack.Screen name="OnBoardingAllScreen" component={OnBoardingAllScreen} />
        <Stack.Screen name="PrimaryScreen" component={PrimaryScreen}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="NotificationsOffScreen" component={NotificationsOffScreen} />
        <Stack.Screen name="MedicationOnScreen" component={MedicationOnScreen}/>
        <Stack.Screen name="NotificationsOnScreen" component={NotificationsOnScreen} />
    </Stack.Navigator>
      </NavigationContainer>
  );
}


