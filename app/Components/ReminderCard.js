import React from 'react';
import { View, StyleSheet, Text, } from 'react-native';
import Svg, { Path } from "react-native-svg"


const ReminderCard = ({ title, comment, time, quantity, status }) =>
{
    

    const statusColors = {
    taken: '#28C724',
    'not taken' : '#D92222',
    pending: '#FA7414',
    };
    
    const statusSvgPaths = {
    taken: (
      <Svg width={30} height={30} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M10.5 0a10.5 10.5 0 100 21 10.5 10.5 0 000-21zm0 19.25a8.75 8.75 0 110-17.5 8.75 8.75 0 010 17.5z"
          fill="#fff"
        />
        <Path
          d="M8.75 12.762L5.867 9.883l-1.234 1.234 4.117 4.121 7.617-7.621-1.234-1.234-6.383 6.379z"
          fill="#fff"
        />
      </Svg>
    ),
    'not taken': (
      <Svg width={30} height={30} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M10.5 0a10.5 10.5 0 100 21 10.5 10.5 0 000-21zm0 19.25a8.75 8.75 0 110-17.5 8.75 8.75 0 010 17.5z"
          fill="#fff"
        />
        <Path
          d="M11.852 10.503l3.14 3.141a.953.953 0 11-1.347 1.348l-3.141-3.141-3.14 3.14a.952.952 0 01-1.557-1.038.954.954 0 01.208-.309l3.141-3.14-3.148-3.15a.952.952 0 111.347-1.347l3.149 3.148 3.141-3.14a.95.95 0 011.204-.12.953.953 0 01.144 1.467l-3.141 3.141z"
          fill="#fff"
        />
      </Svg>
    ),
    pending: (
      <Svg width={30} height={30} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M10.5 0a10.5 10.5 0 100 21 10.5 10.5 0 000-21zm0 19.25a8.75 8.75 0 110-17.5 8.75 8.75 0 010 17.5z"
          fill="#fff"
        />
        <Path
          d="M10.354 3.818a1.14 1.14 0 00-1.14 1.14v5.232l-3.088 3.077a1.14 1.14 0 101.607 1.607l3.42-3.42a1.14 1.14 0 00.341-.797v-5.7a1.14 1.14 0 00-1.14-1.139z"
          fill="#fff"
        />
      </Svg>
    ),
  };
    return (
        <View style={styles.reminder}>

            <View style={styles.container}>

                  <View style={styles.reminderLeftSection}>

                <View style={[styles.iconContainer,{backgroundColor:statusColors[status]}]}>

               {statusSvgPaths[status]}

                </View>
            </View>
            <View style={styles.reminderMiddleSection}>

                <Text style={styles.title}>{title}</Text>
                    <Text style={styles.comment}>{comment}</Text>


            </View>


            <View style={styles.reminderRightSection}>
                    <Text style={styles.quantity}>{quantity}</Text>
                    <Text style={[styles.time,{color:statusColors[status]}]}>{time}</Text>
            </View>

            </View>
            

            <View style={styles.reminderLow}>


                <View style={styles.reminderLowLeftSection}></View>



                <View style={[styles.statusContainer,{backgroundColor:statusColors[status]}]}><Text style={styles.status}>{status}</Text></View>


                
                
                
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    statusContainer: {
        marginLeft: 10,
        borderRadius: 2,
        paddingLeft: 7,
        paddingRight: 7,
        paddingTop: 2,
        paddingBottom : 2,
    },

   

     reminderLowLeftSection: {
         width: '15%',
    },



    
    status: {
        color: '#fff',



    },


   

    reminderLow: {
        flexDirection : 'row',
        width: '100%',
        paddingTop : 10,
    },

    
    reminder: {
        flexDirection: 'column',
        borderBottomColor: 'rgba(150,138,138,0.2)',
        borderBottomWidth: 1,
        paddingBottom: 15,
        paddingTop : 12,
    },

    time: {

    },

    quantity: {
        fontSize : 18,   

        
    },

    comment: {
        color :'#968A8A',
        
    },

    title: {
        fontSize : 18,   
    },


    container: {
        width : '100%',
        flexDirection: 'row',
        

    },

    reminderLeftSection: {
        width: '15%',  
        alignItems :'center',
    },

    reminderMiddleSection: {
        width: '60%',
        justifyContent: 'space-between',
        paddingLeft : 10,
    },

    reminderRightSection: {
        width: '25%',
        alignItems: 'flex-end',
        paddingRight: 10,
        justifyContent: 'space-between',

    },

    iconContainer: {
        backgroundColor: '#28C724',
        height: 50,
        width: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems : 'center',
    },
    
})
export default ReminderCard;