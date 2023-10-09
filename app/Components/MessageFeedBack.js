import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';

const MessageFeedBack = ({ isVisible, closeModal, handleSubmit }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.checkMark}>
             <Svg
      width={81}
      height={81}
      viewBox="0 0 81 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#clip0_778_894)">
        <Rect width={81} height={81} rx={40.5} fill="#28C724" />
        <Path
          d="M40.5 0a40.5 40.5 0 100 81 40.5 40.5 0 000-81zm0 74.25a33.75 33.75 0 110-67.5 33.75 33.75 0 010 67.5z"
          fill="#fff"
        />
        <Path
          d="M33.749 49.224L22.629 38.12l-4.76 4.76 15.88 15.895 29.38-29.396-4.76-4.759-24.62 24.604z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_778_894">
          <Rect width={81} height={81} rx={40.5} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
          </View>
          <View style={styles.doneText}>
            <TouchableOpacity onPress={handleSubmit}>
              <Text style={styles.submitButton}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
    submitButton: {
        fontWeight: '500',
        fontSize : '20'
    },
    doneText: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
        color : '#461066',
    },
    checkMark: {
        width: '100%',
        alignItems : 'center',
    },
    modalContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
      width: '50%',
      height : '20%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },   
})

export default MessageFeedBack;