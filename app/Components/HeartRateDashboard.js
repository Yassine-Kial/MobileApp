import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Svg, { Path } from "react-native-svg";
import { Mask, G } from "react-native-svg";
import { Rect,  Defs, LinearGradient, Stop } from "react-native-svg"




const  HeartRateDashboard = ({time,heartRate,heartStatus,scale}) => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.title}>Heart rate</Text>
                <Text style={styles.time}>{time}</Text>
            </View>

            <View style={styles.lower}>

                <View style={styles.leftPart}>

                    <View style={styles.heartContainer}>

                    <Svg
      width={16}
      height={16}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={14}
        height={14}
      >
        <Path d="M0 0h14v14H0V0z" fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Path
          d="M1.13 4.539c0-3.242 4.489-4.443 5.87-.69 1.381-3.753 5.87-2.552 5.87.69C12.87 8.06 7 12.527 7 12.527S1.13 8.06 1.13 4.539z"
          fill="#DD2E44"
        />
      </G>
    </Svg>
                    </View>

                    <Text style={styles.heartRate}>{heartRate}</Text>
                    <Text style={styles.bpm}>BPM</Text>


        



                </View>

                <View>

                 <Svg
      width={1}
      height={30}
      viewBox="0 0 1 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path stroke="#968A8A" strokeOpacity={0.2} d="M0.5 30L0.5 0" />
    </Svg>
            </View>
                <View style={styles.rightPart}>
                    <View>

                        <Svg
      width={121}
      height={10}
      viewBox="0 0 121 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect
        y={1}
        width={121}
        height={8}
        rx={4}
        fill="url(#paint0_linear_582_830)"
      />
      <Path
        d="M26 5a5 5 0 11-10 0 5 5 0 0110 0zm-8.172 0a3.173 3.173 0 106.345 0 3.173 3.173 0 00-6.345 0z"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_582_830"
          x1={0.999999}
          y1={2.00003}
          x2={116.5}
          y2={1.00002}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#3D0FF2" />
          <Stop offset={0.265625} stopColor="#63A669" />
          <Stop offset={0.421875} stopColor="#2BC53A" />
          <Stop offset={0.671875} stopColor="#A8AB0F" />
          <Stop offset={0.822917} stopColor="#FF6D03" />
          <Stop offset={1} stopColor="#ED0D0D" />
        </LinearGradient>
      </Defs>
    </Svg>
                         
                    </View>

                    <Text style={styles.heartStatus}>{heartStatus}</Text>
                    
                </View>

               
            </View>



        </View>
    );
}

const styles = StyleSheet.create({

    heartStatus: {
        fontSize: 10,
        marginTop : 4,
        
        
    },


   

    title: {
        fontSize: 20,
        marginRight: 20,
        fontWeight : 'bold',
    },

    time: {
        color : '#D9D9D9',
    
    },

    

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 30,
        marginBottom : 10,

    },

    container: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingBottom: 20,
      paddingTop: 20,
                marginBottom : 15,


    },

    

    lower: {
        flexDirection : 'row',
    },
    rightPart: {
        width: '50%',
        paddingRight: 20,
        justifyContent: 'center',
        paddingLeft : 30,
        
    },
    leftPart: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    heartRate: {

        fontSize: 20,
        fontWeight : 'bold',
        
    },

    bpm: {
    fontSize : 13,  
    },
   
})

export default HeartRateDashboard;