import React from 'react';
import { View, StyleSheet, Text, } from 'react-native';
import ReminderCard from './ReminderCard';

const DayReminder = ({day}) => {
    return (
        <View style={styles.container}>


            <Text style={styles.day}>{day}</Text>


                        <ReminderCard title={'Doliprane'} time={'14:22:33'} status={'taken'} comment={'commentaire'} quantity={'4 pills'} />
                        <ReminderCard title={'Doliprane'} time={'14:22:33'} status={'taken'} comment={'commentaire'} quantity={'4 pills'} />
                        <ReminderCard title={'Augmentin'} time={'14:22:33'} status={'not taken'} comment={'commentaire'} quantity={'4 pills'} />
                        <ReminderCard title={'Vitamine D'} time={'14:22:33'} status={'pending'} comment={'commentaire'} quantity={'4 pills'} />
                        <ReminderCard title={'Astrazinika'} time={'14:22:33'} status={'not taken'} comment={'commentaire'} quantity={'4 pills'} />
                        <ReminderCard title={'Orex'} time={'14:22:33'} status={'pending'} comment={'commentaire'} quantity={'4 pills'} />



            
        
        
        
        
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#fff',
        width: '100%',
        marginBottom: 10,
        paddingTop : 15,
    },

    day: {
        color: '#9D9191',
        marginLeft: 20,
        fontSize : 18,
    },
    
})

export default DayReminder;