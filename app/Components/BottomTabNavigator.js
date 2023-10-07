import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import the screens you want to navigate to

import MedicationOffScreen from '../Screens/MedicationOffScreen';
import GamesScreen from '../Screens/GamesScreen';
import HealthDashboardScreen from '../Screens/HealthDashboardScreen';
import AddReminderScreen from '../Screens/AddReminderScreen';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MedicationOffScreen" component={MedicationOffScreen} />
      <Tab.Screen name="GamesScreen" component={GamesScreen} />
      <Tab.Screen name="HealthDashboardScreen" component={HealthDashboardScreen} />
      <Tab.Screen name="AddReminderScreen" component={AddReminderScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
