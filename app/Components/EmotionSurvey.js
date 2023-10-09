import React from 'react';
import Svg, { Circle, Path } from "react-native-svg";
import { View, StyleSheet, TouchableOpacity, Text, StatusBar, SafeAreaView } from 'react-native';
function EmotionSurvey(props) {
    return (
        <View style={styles.emotionContainer}>
            <Text style={styles.emotionText}>How are you feeling today ?</Text>
            <View style={styles.emojiContainer}>
              <View style={styles.emotionCase}>
                <View style={styles.iconContainer}>
                   <Svg
      width={34}
      height={34}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M17 33.5c9.113 0 16.5-7.387 16.5-16.5S26.113.5 17 .5.5 7.887.5 17 7.887 33.5 17 33.5z"
        fill="#F4CB5B"
      />
      <Path
        d="M9.217 18.362a7.474 7.474 0 01-2.359-.383.5.5 0 01.316-.95 6.527 6.527 0 007.384-2.44.5.5 0 01.819.574 7.533 7.533 0 01-6.16 3.199zm15.552-.001a7.532 7.532 0 01-6.16-3.198.5.5 0 01.819-.574 6.524 6.524 0 007.383 2.44.5.5 0 01.316.95 7.426 7.426 0 01-2.358.382zm-2.457 8.677a.5.5 0 01-.482-.37 5 5 0 00-9.66 0 .499.499 0 11-.965-.26 6 6 0 0111.59 0 .501.501 0 01-.483.63z"
        fill="#474750"
      />
    </Svg>
                </View>
                <Text style={styles.caseEmotionText}>SAD</Text>
              </View>

              <View style={styles.emotionCase}>
                <View style={styles.iconContainer}>
                 <Svg
      width={34}
      height={34}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M17 33.497c9.113 0 16.5-7.387 16.5-16.5S26.113.497 17 .497.5 7.884.5 16.997s7.387 16.5 16.5 16.5z"
        fill="#F4CB5B"
      />
      <Path
        d="M12 16.497a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM22 16.497a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
        fill="#474750"
      />
      <Path
        d="M24.321 21.497H9.679a2.179 2.179 0 00-2.179 2.18v.641c0 1.203.976 2.18 2.179 2.18h14.642a2.179 2.179 0 002.179-2.18v-.642a2.179 2.179 0 00-2.179-2.179z"
        fill="#fff"
      />
    </Svg>
                </View>
                <Text style={styles.caseEmotionText}>TIRED</Text>
              </View>
              <View style={styles.emotionCase}>
                <View style={styles.iconContainer}>
                   <Svg
      width={34}
      height={34}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M17 33.5c9.113 0 16.5-7.387 16.5-16.5S26.113.5 17 .5.5 7.887.5 17 7.887 33.5 17 33.5z"
        fill="#F4CB5B"
      />
      <Path
        d="M12 16.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM22 16.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM17 29a11.012 11.012 0 01-9.01-4.69.5.5 0 11.819-.574 9.999 9.999 0 0016.382 0 .5.5 0 01.82.574A11.01 11.01 0 0117 29z"
        fill="#474750"
      />
    </Svg>
                </View>
                <Text style={styles.caseEmotionText}>HAPPY</Text>
              </View>

              <View style={styles.emotionCase}>
                <View style={styles.iconContainer}>
                   <Svg
      width={33}
      height={33}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M16.5 33C25.613 33 33 25.613 33 16.5S25.613 0 16.5 0 0 7.387 0 16.5 7.387 33 16.5 33z"
        fill="#F4CB5B"
      />
      <Path
        d="M11.5 16a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM21.5 16a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM25.92 21c.604 0 .085.534-.002 1.132-.043.294.897.584.822.868-1.08 3.99-5.28 7-10.24 7s-9.16-3.01-10.24-7c-.075-.284.865-.573.822-.868C6.995 21.534 6.476 21 7.08 21h18.84z"
        fill="#474750"
      />
      <Path
        d="M25.92 21H7.08a1 1 0 00-.996 1.108c.041.3.1.598.176.892h20.48c.076-.294.135-.592.176-.892A1 1 0 0025.92 21z"
        fill="#fff"
      />
    </Svg>
                </View>
                <Text style={styles.caseEmotionText}>ENERGETIC</Text>
              </View>
            </View>
          </View>

    );
}

const styles = StyleSheet.create({

    emojiContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom : 10,
  },

  caseEmotionText: {
    color: '#968A8A',
    marginTop : 10,
  },

  emotionCase: {
    justifyContent: 'center',
    alignItems : 'center',
  },
  emotionContainer: {
    backgroundColor: '#fff', 
    width: '95%',
    borderRadius: 10,
    marginTop: 10,
    paddingTop : 15,
  },
  emotionText: {
    fontSize: 20,
    fontWeight : 'bold',
    marginLeft: 20,
    marginBottom : 10,
    
  },
    
})

export default EmotionSurvey;