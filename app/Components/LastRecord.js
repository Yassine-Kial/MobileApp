import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ReminderCard from './ReminderCard';

function LastRecord(props) {
    return (
        <View style={styles.lastRecordContainer}>

            <View style={styles.horizantalRule}>
            <Text style={styles.recordText}>Last records</Text>

            </View>

            <ReminderCard title={'Doliprane'} time={'14:22:33'} status={'taken'} comment={'commentaire'} quantity={'4 pills'} />
            <ReminderCard title={'Vitamine D'} time={'14:22:33'} status={'pending'} comment={'commentaire'} quantity={'4 pills'} />
            <ReminderCard title={'Astrazinika'} time={'14:22:33'} status={'not taken'} comment={'commentaire'} quantity={'4 pills'} />
            
          </View>
    );
}

const styles = StyleSheet.create({

    horizantalRule: {
    width: '100%',
    paddingTop: 7,
    paddingBottom: 7,
    borderBottomColor: 'rgba(150,138,138,0.2)',
    borderBottomWidth: 1,
  },
  lastRecordContainer: {
    backgroundColor: '#fff', 
    width: '95%',
    borderRadius : 10,
  },
  recordText: {
    fontSize: 20,
    fontWeight : 'bold',
    marginLeft: 50,
  },
    
})

export default LastRecord;