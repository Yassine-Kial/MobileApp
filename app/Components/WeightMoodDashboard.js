import React from 'react';

import { View, StyleSheet,Text} from 'react-native';
import Svg, { Path } from "react-native-svg"

const WeightMoodDashboard = ({date,weight,weightStatus,moodScore,moodStatus}) => {
    return (
        <View style={styles.container}>

            <View style={styles.weightPart}>
                <View style={styles.headerContainer}>
                <Text style={styles.title}>Weight</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
                

                <View style={styles.lower}>
                    <View style={styles.ringContainer}>
                        <Svg
      width={160}
      height={160}
      viewBox="0 0 68 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M56.624 8.62A34.001 34.001 0 0168 33.955l-4.524.006a29.475 29.475 0 00-9.862-21.964l3.01-3.377zM0 34A34 34 0 0111.342 8.65l3.015 3.373A29.475 29.475 0 004.524 34H0zM34 0a34 34 0 0121.431 7.605l-2.851 3.512A29.476 29.476 0 0034 4.524V0z"
        fill="#D9D9D9"
      />
      <Path
        d="M12.735 7.47A34 34 0 0132.969.017l.138 4.522A29.476 29.476 0 0015.565 11l-2.83-3.53z"
        fill="#BA68C8"
      />
      <Path
        d="M22.072 4.984a.388.388 0 01.542-.399l3.843 1.686c.274.12.315.491.075.668L23.15 9.425a.388.388 0 01-.616-.27l-.462-4.171z"
        fill="#BA68C8"
        stroke="#fff"
        strokeWidth={0.3}
      />
                        </Svg>
                        
                        <View style={styles.WeightDetailsContainer}>

                            <Text style={styles.weight}>{weight}</Text>
                    <Text style={styles.kg}>kg</Text>
                            <Text style={styles.status}>{weightStatus}</Text>
                    </View>
                    </View>
                </View>
            </View>

            <View>

                 <Svg
      width={1}
      height={150}
      viewBox="0 0 1 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path stroke="#968A8A" strokeOpacity={0.2} d="M0.5 150L0.5 0" />
    </Svg>
            </View>
            <View style={styles.moodPart}>

                <View style={styles.headerContainer}>
                    <Text style={styles.title}>Mood score</Text>


                </View>
                

                <View style={styles.lower}>
                    <View style={styles.ringContainer}>
                        <Svg
      width={160}
      height={160}
      viewBox="0 0 68 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M0 34A34 34 0 0115.955 5.184l2.401 3.834A29.475 29.475 0 004.524 34H0zM17.433 4.31A34 34 0 0150.372 4.2l-2.179 3.965a29.476 29.476 0 00-28.555.094l-2.205-3.95zM52.16 5.256A34 34 0 0168 34.136l-4.524-.019A29.476 29.476 0 0049.743 9.08l2.416-3.824z"
        fill="#D9D9D9"
      />
    </Svg>  
                        <View style={styles.WeightDetailsContainer}>

                    <View><Svg
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
    </Svg></View>
                            <Text style={styles.kg}>{moodScore}</Text>
                            <Text style={styles.status}>{moodStatus}</Text>


                    </View>
                    </View>
                    
                    
                </View>




            </View>
        </View>
    );
}
const styles = StyleSheet.create({

    weightPart: {
    },

    moodPart: {
    },

    lower: {
    },

    headerContainer: {
        height: '30%',
    },

    title: {
        fontSize: 25,
        color : '#461066',
        
    },

    status: {

        color: '#BA68C8',
        fontSize: 25,
        
    },

    weight: {
      fontSize : 25,  
    },

    kg: {
      fontSize : 15,  
    },

    date: {

        color : '#D9D9D9'

    },
    container: {
        height : '22%',
        backgroundColor: '#fff',
        width: '90%',
        flexDirection: 'row',
        borderRadius: 15,
        paddingTop: 20,
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom : 20,
    },
    WeightDetailsContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ringContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default WeightMoodDashboard;