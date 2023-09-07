import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function ReminderModal({ onClose }) {
  return (
    <View style={styles.modalContainer}>
      {/* Content of the modal */}
      <Text style={styles.modalText}>Reminder Modal Content</Text>
      {/* Close button */}
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#461066',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ReminderModal;
