import React, { useState} from 'react';
import { View, TouchableOpacity, Modal, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
function PickerOption({ selectedValue, options, onValueChange, righText }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModalVisibility = () => {
    setModalVisible(!isModalVisible);
  };


  const handleOptionSelect = (itemValue) =>
  {
    onValueChange(itemValue);
    toggleModalVisibility();
    righText = { selectedValue };
  };
  return (
    <View>
      <TouchableOpacity onPress={toggleModalVisibility}>
        <Text style={styles.text}>{righText}</Text>
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleModalVisibility}>
        <View style={styles.modalContainer}>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedValue}
              onValueChange={handleOptionSelect}>
              {options.map((option) => (
                <Picker.Item label={option.label} value={option.value} key={option.value} />
              ))}
            </Picker>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  pickerContainer: {
    width: '80%', // Adjust the width as needed
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },

  text: {
        color : '#9D9191', 
  
  },
});

export default PickerOption;
