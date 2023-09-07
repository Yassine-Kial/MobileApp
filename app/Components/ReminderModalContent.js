import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

function ReminderModalContent() {
  return (
      <View style={[styles.modalContent, { height: windowHeight * 0.8}]}>
      {/* Content of the modal */}
      <Text style={styles.modalText}>Reminder Modal Content</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width : '100%',

   
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default ReminderModalContent;
