import React, {useState} from 'react';
import { View, StyleSheet, Image, Text, SafeAreaView, TouchableOpacity, Animated } from 'react-native';
import Swiper from 'react-native-swiper';
import OnBoarding1Screen from './OnBoarding1Screen';
import OnBoarding2Screen from './OnBoarding2Screen';
import OnBoarding3Screen from './OnBoarding3Screen';
import OnBoarding4Screen from './OnBoarding4Screen';
import OnBoarding5Screen from './OnBoarding5Screen';

import { Link } from 'expo-router';

function OnBoardingAllScreen({navigation})
{
    
    const [currentPage, setCurrentPage] = useState(0);
    const activeNavigationPointScale = new Animated.Value(1);
  const handleIndexChanged = index => {
      setCurrentPage(index);
      Animated.spring(activeNavigationPointScale, {
      toValue: 5, // Adjust the scale value as needed
      useNativeDriver: false,
    }).start(() => {
      // Reset the scale after animation completes
      activeNavigationPointScale.setValue(1);
    });
  };

  const renderNavigationPoints = () => {
    return [0, 1, 2, 3, 4].map((_, index) => (
      <Animated.View
        key={index}
        style={[
          styles.navigationPoint,
          index === currentPage && styles.activeNavigationPoint,
          { transform: [{ scale: index === currentPage ? activeNavigationPointScale : 1 }] },
        ]}
      />
      
    ));
  };
    return (
        <View style={styles.container}>

        

      <Swiper
        loop={false}
        showsButtons={false}
        showsPagination={false}
        index={0}
        onIndexChanged={handleIndexChanged}
         // Start with the first page
      >
        {/* Page 1 */}
        <View style={styles.slide}>
          
                    <OnBoarding1Screen/>
        </View>

        {/* Page 2 */}
        <View style={styles.slide}>
          <OnBoarding2Screen/>
        </View>
        {/* Page 3 */}
        <View style={styles.slide}>
          <OnBoarding3Screen/>
        </View>  

        {/* Page 4 */}
        <View style={styles.slide}>
          <OnBoarding4Screen/>
                </View> 

        {/* Page 5 */}
        <View style={styles.slide}>
          <OnBoarding5Screen/>
        </View>            
        {/* ... Repeat for other pages */}
      </Swiper>
      {/* Navigation Points */}
            <View style={styles.navigationPoints}>{renderNavigationPoints()}</View>
      {/* Sign In Button */}
      <View>
                <TouchableOpacity activeOpacity={0.7} style={styles.loginButton } onPress={() => navigation.navigate('PrimaryScreen')}>
                    <Text style={styles.loginButtonText}>Sign in</Text>
                </TouchableOpacity>
            </View>
    </View>
    );

}

const styles = StyleSheet.create({

    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
  },
  description: {
    fontSize: 16,
  },
  navigationPoints: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  navigationPoint: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 5,
    },
  activeNavigationPoint: {
      backgroundColor: '#821655', // Change to the active color
      transitionDuration: 0.01,
  },
  
  
  loginButton: {
        backgroundColor: '#461066',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 180,
        paddingRight: 180,
      borderRadius: 3,
        marginBottom : 40,
    },

    loginButtonText: {
        color: '#fff',
        fontFamily: 'Poppins_500Medium',
    },
})
export default OnBoardingAllScreen;