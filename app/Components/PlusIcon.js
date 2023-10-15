import React , {useState} from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Modal, TextInput } from 'react-native';
import Svg, { Path } from "react-native-svg";


function PlusIcon({ comment })
{
    
    const [isModalVisible, setModalVisible] = useState(false);
  const [inputText, setInputText] = useState('');
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const handleInputChange = (text) => {
    setInputText(text);
  };
  const handleSubmit = () => {
    // Handle the submitted text here
    console.log('Submitted Text:', inputText);
    comment(inputText);
    toggleModal(); // Close the modal after handling the input
  };
    return (
        <View>
            <TouchableOpacity onPress={toggleModal}>
                <View style={styles.PlusIconContainer}>
                    <Svg
      width={20}
      height={20}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M15 7H9V1a1 1 0 00-2 0v6H1a1 1 0 000 2h6v6a1 1 0 102 0V9h6a1 1 0 100-2z"
        fill="#fff"
      />
    </Svg>
                 </View>
            </TouchableOpacity>

            <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              placeholder="Enter Text"
              onChangeText={handleInputChange}
              value={inputText}
              style={styles.input}
            />
            <TouchableOpacity onPress={handleSubmit}>
              <Text style={styles.submitButton}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


    </View>
    );
}
const styles = StyleSheet.create({
    PlusIconContainer: {
        justifyContent: 'center',
        alignItems : 'center',
        height: 35,
        width: 35,
        borderRadius: 17.5,
        backgroundColor : '#461066',
    },

    modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
      width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#461066',
      marginBottom: 10,
        paddingBottom: 5,
    },
    submitButton: {
    marginTop : 20,
    backgroundColor: '#461066',
    color: '#fff',
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
  },
})
export default PlusIcon;