import React , {useState} from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Modal} from 'react-native';
import AddReminderScreen from '../Screens/AddReminderScreen';
import GameDetail from './GameDetail';

const Games = ({ title, backgroundColor }) => {
  const screenWidth = Dimensions.get('window').width;
    const containerWidth = screenWidth * 0.5; // Adjust the percentage as needed
     const [isModalVisible, setModalVisible] = useState(false);
    const closeModal = () => {
    setModalVisible(false);
  };
  return (
      <TouchableOpacity onPress={() => setModalVisible(true)} activeOpacity={0.8} style={[styles.container, { width: containerWidth }]}>
      <View style={[styles.gameThumbnail, { backgroundColor }]}></View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
          </View>
                <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)} // Close the modal when Android back button is pressed
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <GameDetail closeModal={closeModal}/>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    modalContainer: {
    flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent : 'flex-end',
  },
  modalContent: {
    width: '100%',
    height : '95%',
  },
  container: {
    marginRight: 10, // Adjust as needed
    height: '80%', // Adjust as needed
  },
  gameThumbnail: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    height: '70%', // Adjust as needed
  },
  titleContainer: {
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    height: '30%', // Adjust as needed
    backgroundColor: '#fff',
    paddingLeft: 4,
    },
  title: {
    fontSize: 16,// Adjust as needed
    },
});

export default Games;
