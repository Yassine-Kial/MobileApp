import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Svg, { Path } from "react-native-svg";
import { Mask, G } from "react-native-svg";
import { Rect,  Defs, LinearGradient, Stop } from "react-native-svg"




const  SleepDashboard = ({time,sleepScore,bedHour,bedMinute,deepBedHour,deepBedMinute,sleepStartTime,sleepEndTime,chart}) => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.title}>Sleep</Text>
                <Text style={styles.time}>{time}</Text>
            </View>

            <View style={styles.lower}>

                <View style={styles.leftSection}>
                    <View style={styles.sleepScoreContainer}>

                        <Svg
      width={30}
      height={32}
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path d="M8 15A7 7 0 108 1a7 7 0 000 14z" fill="#FFE500" />
      <Path
        d="M8 1C4.15 1 1 4.15 1 8s3.15 7 7 7 7-3.15 7-7-3.15-7-7-7zm0 12.95a6.37 6.37 0 01-6.37-6.37c0-3.535 2.835-6.405 6.37-6.405a6.37 6.37 0 016.37 6.37c.035 3.535-2.835 6.405-6.37 6.405z"
        fill="#EBCB00"
      />
      <Path
        d="M8 2.925c1.16 0 2.1-.235 2.1-.525 0-.29-.94-.525-2.1-.525-1.16 0-2.1.235-2.1.525 0 .29.94.525 2.1.525z"
        fill="#FFF48C"
      />
      <Path
        opacity={0.15}
        d="M8 17.1c3.093 0 5.6-.235 5.6-.525 0-.29-2.507-.525-5.6-.525-3.093 0-5.6.235-5.6.525 0 .29 2.507.525 5.6.525z"
        fill="#45413C"
      />
      <Path
        d="M8 15A7 7 0 108 1a7 7 0 000 14z"
        stroke="#45413C"
        strokeWidth={0.35}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.2 10.275c.483 0 .875-.235.875-.525 0-.29-.392-.525-.875-.525s-.875.235-.875.525c0 .29.392.525.875.525zM3.8 10.275c.483 0 .875-.235.875-.525 0-.29-.392-.525-.875-.525s-.875.235-.875.525c0 .29.392.525.875.525z"
        fill="#FFAA54"
      />
      <Path
        d="M4.325 8a.35.35 0 100-.7.35.35 0 000 .7zM11.675 8a.35.35 0 100-.7.35.35 0 000 .7z"
        fill="#45413C"
        stroke="#45413C"
        strokeWidth={0.35}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 13.95c1.96 0 3.605-1.4 3.85-3.22a.397.397 0 00-.105-.28c-.07-.07-.21-.105-.315-.105-2.275.35-4.55.35-6.825 0a.282.282 0 00-.315.105c-.07.07-.14.175-.105.28.21 1.82 1.855 3.22 3.815 3.22z"
        fill="#FFB0CA"
        stroke="#45413C"
        strokeWidth={0.35}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 12.2c-1.12 0-2.135.245-2.835.595A4.02 4.02 0 008 13.95a4.02 4.02 0 002.835-1.155c-.7-.35-1.715-.595-2.835-.595z"
        fill="#FF87AF"
        stroke="#45413C"
        strokeWidth={0.35}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>





                        <Text style={styles.sleepScore}>{sleepScore}</Text>
                    </View>
                    <View>

                        <Text style={styles.description}>Sleep score</Text>
                    </View>
                </View>
                            <View>

                 <Svg
      width={1}
      height={50}
      viewBox="0 0 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path stroke="#968A8A" strokeOpacity={0.2} d="M0.5 50L0.5 0" />
    </Svg>
            </View>
                
                <View style={styles.middleSection}>

                     <View style={styles.sleepScoreContainer}>

                       



                        <Text>
                            <Text style={styles.number}>{bedHour}</Text>
                            <Text style={styles.timeUnit}>h</Text>
                            <Text style={styles.number}>{bedMinute}</Text>
                            <Text style={styles.timeUnit}>min</Text>
                        </Text>
                    </View>
                    <View>

                        <Text style={styles.description}>In bed for</Text>
                    </View>
           

                </View>
                            <View>

                 <Svg
      width={1}
      height={50}
      viewBox="0 0 1 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path stroke="#968A8A" strokeOpacity={0.2} d="M0.5 50L0.5 0" />
    </Svg>
            </View>
                <View style={styles.rightSection}>

                         <View style={styles.sleepScoreContainer}>

                     





                        <Text>
                             <Text>
                                <Text style={styles.number}>{deepBedHour}</Text>
                            <Text style={styles.timeUnit}>h</Text>
                                <Text style={styles.number}>{deepBedMinute}</Text>
                            <Text style={styles.timeUnit}>min</Text>
                        </Text>
                        </Text>
                    </View>
                    <View>

                        <Text style={styles.description}>Deep sleep duration</Text>
                    </View>
           

                </View>



               
            </View>
            
            <View style={styles.sleepChart}>

                <Svg
      width={350}
      height={60}
      viewBox="0 0 350 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path fill="#6876F0" d="M0 14H350V60H0z" />
      <Path
        d="M25 5a5 5 0 015-5h4a5 5 0 015 5v55H25V5zM133 5a5 5 0 015-5h4a5 5 0 015 5v55h-14V5zM82 2.5a2.5 2.5 0 015 0V60h-5V2.5z"
        fill="#BA68C8"
      />
      <Path
        d="M222 5a5 5 0 015-5h4a5 5 0 015 5v55h-14V5zM72 1.5a1.5 1.5 0 013 0V60h-3V1.5zM149 1.5a1.5 1.5 0 013 0V60h-3V1.5zM173 1.5a1.5 1.5 0 013 0V60h-3V1.5zM251 1.5a1.5 1.5 0 013 0V60h-3V1.5z"
        fill="#22BF1F"
      />
      <Path d="M42 5a5 5 0 015-5h18a5 5 0 015 5v55H42V5z" fill="#BA68C8" />
    </Svg>




            </View>

            <View style={styles.sleepBar}>
                <Text>{sleepStartTime}</Text>
                <Text>{sleepEndTime}</Text>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({

    sleepBar: {
        marginTop : 4,
        flexDirection: 'row',
        paddingLeft: 20,
        justifyContent : 'space-between',
    },


    sleepChart: {

        marginTop: 30,
        paddingLeft : 20

        
        
    },
    number: {
      fontSize : 25,  
    },

    description: {
        color: '#D9D9D9',
        fontSize : 11,
    },

    sleepScoreContainer: {
        flexDirection: 'row',
    },


    sleepScore: {

        fontSize: 25,
        marginLeft : 5
        
    },


    leftSection: {

        width: '30%',
        alignItems : 'center',
        
    },

    middleSection: {

        width: '30%',
        alignItems : 'center',
        
    },

    rightSection: {

        width: '30%',
        alignItems : 'center',
        
    },

    sleepScoreContainer: {
        height : 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

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
        marginBottom: 10,
        

    },

    container: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingBottom: 20,
        paddingTop: 20,
        paddingRight: 20,
                marginBottom : 15,

        

    },

    

    lower: {
        flexDirection: 'row',
        justifyContent : 'space-between',
    },
    rightPart: {
        width: '50%',
        paddingRight: 20,
        justifyContent: 'center',
        paddingLeft : 30,
        
    },
   

})

export default SleepDashboard;