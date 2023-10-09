import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GamesScreen from './GamesScreen/GamesScreen';
import MedicationOnScreen from './MedicationsScreens/MedicationOnScreen';
import LiveViewOffScreen from './LiveViewScreens/LiveViewOffScreen';
import HomeScreen from './HomeScreen';
const homeName = "Home";
const Medication = "Medication";
const LiveView = "Live View";
const Games = "Games";
const Tab = createBottomTabNavigator();
function PrimaryScreen(navigation) {
  return (
      <Tab.Navigator
          initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === Medication) {
              iconName = focused ? 'medkit' : 'medkit-outline';
            } else if (rn === LiveView) {
              iconName = focused ? 'videocam' : 'videocam-outline';
            }
                 else if (rn === Games) {
              iconName = focused ? 'game-controller' : 'game-controller-outline';
            }
            // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#461066',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 2,fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>
        <Tab.Screen name={homeName} component={HomeScreen} options={{ headerShown: false }} />
          <Tab.Screen name={Medication} component={MedicationOnScreen} options={{ headerShown: false }} />
                  <Tab.Screen name={Games} component={GamesScreen} options={{ headerShown: false }}/>
          <Tab.Screen name={LiveView} component={LiveViewOffScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
  );
}
export default PrimaryScreen;