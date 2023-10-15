import React from 'react';
import { View, StyleSheet, Text, } from 'react-native';
import ReminderCard from './ReminderCard';

const DayReminder = ({day, reminders}) => {
    return (
        <View style={styles.container}>
      <Text style={styles.day}>{day}</Text>
      {reminders.map((reminder, index) => (
        <ReminderCard
          key={index}
          title={reminder.title}
          time={reminder.time}
          status={reminder.status}
          comment={reminder.comment}
          quantity={reminder.quantity}
        />
      ))}
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