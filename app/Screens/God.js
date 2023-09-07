import React , {useState} from 'react';
import { SafeAreaView, View, StyleSheet,Text,TouchableOpacity, ScrollView } from 'react-native';
import Svg, { Circle, Path } from "react-native-svg";
import { StatusBar } from 'react-native';
import NotificationCard from '../Components/NotificationCard';
import Swipeable from 'react-native-swipeable';
import TubeDay from '../Components/TubeDay';
import RingDay from '../Components/RingDay';
import ReminderCard from '../Components/ReminderCard';
import DayReminder from '../Components/DayReminder';
import AddReminderScreen from './AddReminderScreen';
import GeneralButtonReminder from '../Components/GeneralButtonReminder';
import PickerOption from '../Components/PickerOption';
import Header from '../Components/Header';
import WeightMoodDashboard from '../Components/WeightMoodDashboard';
import StepsDashboard from '../Components/StepsDashboard';
import HeartRateDashboard from '../Components/HeartRateDashboard';
import SleepDashboard from '../Components/SleepDashboard';
import Games from '../Components/Games';
import GamesInfo from '../Components/GamesInfo';
function God(props)
{
    return (
      <View style={styles.container}>

        <GamesInfo/>

        </View>
    );
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },    
})

export default God;