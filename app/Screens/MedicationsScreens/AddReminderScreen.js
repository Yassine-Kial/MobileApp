import React , {useState, useEffect} from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity, Modal} from 'react-native';
import GeneralButtonReminder from '../../Components/MedicationsComponents/GeneralButtonReminder';
import PillIcon from '../../assets/Icons/PillIcon';
import MessageFeedBack from '../../Components/MessageFeedBack';
const AddReminderScreen = ({ closeModal }) =>
{

  const [modalTimeout, setModalTimeout] = useState(null);

     const [isModalVisible, setModalVisible] = useState(false);
    const [inputText, setInputText] = useState('');
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const handleSubmit = () => {
  // Handle the submitted text here
  console.log('Submitted Text:', inputText);
    toggleModal(); // Close the modal after handling the input
    clearTimeout(modalTimeout); // Clear the timeout
    handleSave(); 
  };
   useEffect(() => {
  if (isModalVisible) {
    const timeoutId = setTimeout(() => {
      toggleModal(); // Close the modal automatically after 10 seconds
    }, 500); // 10000 milliseconds (10 seconds)
    setModalTimeout(timeoutId); // Store the timeout ID in state
  }
}, [isModalVisible]);
  const [medicationName, setMedicationName] = useState('');
  const [date, setDate] = useState('20/11/2002');
  const [time, setTime] = useState('14:26');
  const [quantity, setQuantity] = useState('');
  const [comment, setComment] = useState('');
  const [alarm, setAlarm] = useState('');

    
  const handleSave = () => {
    console.log('Medication Name:', medicationName);
    console.log('Date:', date);
    console.log('Time:', time);
    console.log('Quantity:', quantity);
    console.log('Comment:', inputText);
    console.log('Alarm :', alarm);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SafeAreaView>
        <View style={styles.upperText}>
            <TouchableOpacity style={styles.cancelButton} onPress={closeModal}><Text style={styles.cancelText}>cancel</Text></TouchableOpacity>
            <Text style={styles.addReminderText}>Add new reminder</Text>
          </View>
          <View style={styles.iconSection}>
            <View style={styles.iconContainer}>
            <PillIcon/>
            </View>
        </View>
          </SafeAreaView>
      </View>
      <View style={styles.body}>
        <View style={styles.generalSection}>
          <Text>GENERAL</Text>
        </View>
        <GeneralButtonReminder title={'Medication name'} rightText={''} icon={'pill'} />
        <GeneralButtonReminder title={'Date'} rightText={''} icon={'date'} />
        <GeneralButtonReminder title={'Time'} rightText={''} icon={'time'} />
        <GeneralButtonReminder title={'Quantity'} rightText={''} icon={'quantity'} />
        <View style={styles.generalSection}>
          <Text>More details</Text>
        </View>
        <GeneralButtonReminder title={'Comment'} rightText={''} icon={'comment'} />
        <GeneralButtonReminder title={'Alarm repititions'} rightText={''} icon={'alarm'} />
        <View style={styles.saveButtonContainer}>
                <TouchableOpacity activeOpacity={0.7} style={styles.loginButton} onPress={handleSubmit}>
                    <Text style={styles.loginButtonText}>save</Text>
          </TouchableOpacity>
             <MessageFeedBack
        isVisible={isModalVisible}
        closeModal={toggleModal}
        handleSubmit={handleSubmit}
          />
            </View>
      </View>
    </View>
    );
}
const styles = StyleSheet.create({
  saveButtonContainer: {
    marginTop : 40,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '100%',
    flex: 1,
    paddingTop : 20,
  },
  loginButton: {
        backgroundColor: '#461066',
        
        paddingLeft: 180,
        paddingRight: 180,
      borderRadius: 3,
    marginBottom: 40,
    height: 40,
    justifyContent: 'center',
    alignItems : 'center',
    },
    loginButtonText: {
        color: '#fff',
      fontFamily: 'Poppins_500Medium',
        fontSize : 20
    },
  generalSection: {
    backgroundColor: '#F0ECEC',
    height: '8%',
    paddingLeft: '2%',
    paddingTop: '5%',
    paddingLeft : '6%',    
  },
  iconSection: {
    flexDirection : 'row',
    justifyContent: 'center', 
    marginTop : 30,
  },
  iconContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems : 'center',
  },
  cancelButton: {
    position: 'absolute',
    left : 20,
  },
  container: {
    flex: 1,
  },
  header: {
    paddingTop : 15,
    borderTopRightRadius: 20,
    borderTopLeftRadius : 20,
    backgroundColor: '#461066',
    height :'25%',
  },
  cancelText: {
    color: '#fff', 
    fontSize : 22,
  },
  addReminderText: {
    color: '#fff', 
        fontSize : 22,
  },
  upperText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems : 'center',
  },  
  body : {
    height: '75%',
    backgroundColor : '#F0ECEC',
  },
})

export default AddReminderScreen;