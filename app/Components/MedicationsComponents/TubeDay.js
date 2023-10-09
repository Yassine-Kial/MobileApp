import React from 'react';
import { View, StyleSheet , Text } from 'react-native';
import Svg, { Path } from "react-native-svg";


const TubeDay = ({ day }) => {
    return (
        <View style={styles.container}>
            <View>

                <Svg
            width={15}
            height={69}
            viewBox="0 0 15 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <Path
                d="M0 13.5h15v50a5 5 0 01-5 5H5a5 5 0 01-5-5v-50zM0 5a5 5 0 015-5h5a5 5 0 015 5v7H0V5z"
                fill="#EDECED"
            />
            </Svg>
            </View>

            <View>
                <Text style={styles.day}>{day}</Text>
            </View>
            
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        
    },
    day: {
        color : '#D9D9D9',
    },
    
})
export default TubeDay;