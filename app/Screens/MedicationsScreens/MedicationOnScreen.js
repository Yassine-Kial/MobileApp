import React , { useState } from 'react';
import { SafeAreaView, View, StyleSheet,Text,TouchableOpacity, ScrollView, Modal } from 'react-native';
import Svg, { Circle, Path } from "react-native-svg";
import { StatusBar } from 'react-native';
import MedicationsInfo from '../../Components/ServiceInformations/MedicationsInfo';
import
    {
    useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
}from '@expo-google-fonts/poppins';
import RingDay from '../../Components/MedicationsComponents/RingDay';
import TubeDay from '../../Components/MedicationsComponents/TubeDay';
import DayReminder from '../../Components/DayReminder';
import AddReminderScreen from './AddReminderScreen';
function MedicationOnScreen(props)
{
    const [reminders, setReminders] = useState([]);
    const addReminder = (newReminderData) => {
    // Add the new reminder data to the state.
    setReminders([...reminders, newReminderData]);
    };
    const organizedData = reminders.reduce((acc, reminder) => {
  const date = reminder.date;
  if (!acc[date]) {
    acc[date] = [];
  }
  acc[date].push(reminder);
  return acc;
    }, {});
     // Step 2: Add state for modal visibility
  const [modalVisible, setModalVisible2] = useState(false);
  // Step 3: Create function to toggle modal visibility
  const toggleModal = () => {
    setModalVisible2(!modalVisible);
  };
    const [isModalVisible, setModalVisible] = useState(false);
    const closeModal = () => {
    setModalVisible(false);
  };
    const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    });


  const remindersEmpty = reminders.length === 0;


    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content" />
            <View style={styles.header}>
                <SafeAreaView style={styles.headerContent}>
                    <View style={styles.headerTitleContainer}><Text style={styles.headerTitle}>Medication</Text></View>
                    <TouchableOpacity onPress={toggleModal} activeOpacity={0.2} style={styles.headerRightPartContainer}>
                        <View style={styles.iconContainerRight}>
                            <Svg
                                    width={26}
                                    height={26}
                                    viewBox="0 0 26 26"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    {...props}
                                    >
                                    <Path
                                        d="M13 0a13 13 0 1013 13A13.014 13.014 0 0013 0zm0 23.4A10.4 10.4 0 1123.4 13 10.412 10.412 0 0113 23.4zm0-11.05a1.3 1.3 0 00-1.3 1.3v3.9a1.3 1.3 0 002.6 0v-3.9a1.3 1.3 0 00-1.3-1.3zm0-5.2a1.625 1.625 0 100 3.25 1.625 1.625 0 000-3.25z"
                                        fill="#fff"
                                    />
                                    </Svg>
                           </View>
                    </TouchableOpacity>
                    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer2}>
                    <MedicationsInfo toggleModal={toggleModal}/>
        </View>
      </Modal>
                </SafeAreaView>
            </View>
            <View style={styles.dashboardContainer}>
                <View style={styles.dashboard}>     
                    <View style={styles.dashboardLeftPart}>
                        <RingDay/>
                    </View>
                    <View style={styles.dashboardRightPart}>
                        <TubeDay day={'M'} />
                        <TubeDay day={'Tu'} />
                        <TubeDay day={'W'} />
                        <TubeDay day={'Th'} />
                        <TubeDay day={'F'} />
                        <TubeDay day={'Sa'} />
                        <TubeDay day={'Su'} />
                    </View>
                </View>
            </View>
            <View style={remindersEmpty ? styles.nobody : styles.body}>
                
                {remindersEmpty && (
                    <View style={styles.nobody}>
                        <View style={styles.listIconContainer}>
                     <Svg
      width={100}
      height={100}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={50} cy={50} r={50} fill="#EDECED" />
      <Path
        d="M32.104 73.958a5.104 5.104 0 100-10.208 5.104 5.104 0 000 10.208z"
        fill="#461066"
      />
      <Path
        d="M47.417 33.125H76"
        stroke="#461066"
        strokeWidth={4.08333}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M32.104 37.208a5.104 5.104 0 100-10.208 5.104 5.104 0 000 10.208zM32.104 55.583a5.104 5.104 0 100-10.208 5.104 5.104 0 000 10.208z"
        fill="#461066"
      />
      <Path
        d="M47.417 51.5H76M47.417 69.875H76"
        stroke="#461066"
        strokeWidth={4.08333}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>

                </View>


                <View>

                    <Text style={styles.primaryText}>No data could be found for this patient.</Text>
                    <Text style={styles.secondaryText}>Add your first reminder !</Text>

                </View>
        </View>
      )}
      {!remindersEmpty && (
        <ScrollView style={styles.scrollView}>
          {Object.keys(organizedData).map((date) => (
            <DayReminder key={date} day={date} reminders={organizedData[date]} />
          ))}
        </ScrollView>
      )}


                <TouchableOpacity activeOpacity={0.6} style={styles.addReminderButton} onPress={() => setModalVisible(true)}>
                    <View style={styles.plusIconContainer}>
                        <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
                        >
      <Path
        d="M8 1v14M1 8h14"
        stroke="#461066"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
                        </Svg>
                    </View>
                    <View>
                        <Text style={styles.buttonText}>Reminder</Text>
                    </View>
                </TouchableOpacity>
                <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)} // Close the modal when Android back button is pressed
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <AddReminderScreen closeModal={closeModal} handleAddReminder={addReminder} />
          </View>
        </View>
      </Modal>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({


    nobody: {
        height: '65%',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop : 50,
    },
     primaryText: {
        color: '#461066',
        textAlign: 'center',
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 20,
        marginBottom : 20,
    },
    secondaryText: {
        color: '#461066',
        textAlign: 'center',
        fontFamily: 'Poppins_500Medium',
        fontSize : 15,
    },
    listIconContainer: {
        marginBottom: 50,
    },
    modalContainer2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
    flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent : 'flex-end',
  },
  modalContent: {
    width: '100%',
    height : '95%',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  modalCloseButton: {
    marginTop: 20,
    backgroundColor: '#461066',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalCloseButtonText: {
    color: '#fff',
    fontSize: 16,
  },    
headerRightPartContainer: {
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        width: '18%',
        paddingRight: 10,
    },
    dashboardRightPart: {
        flexDirection: 'row',
        width: '50%',
        alignItems: 'center',
        paddingRight: 20,
    },
    dashboardLeftPart: {
        width : '50%',
        alignItems: 'center',
        justifyContent : 'center',
    },
    dashboard: {
        backgroundColor: '#fff',
        height: '80%',
        width: '90%',
        borderRadius: 8,
        flexDirection : 'row',
    },
    buttonText: {
        color : '#fff',
    },
    addReminderButton: {
        flexDirection: 'row',
        backgroundColor: '#461066',
        alignItems: 'center',
        borderRadius: 50,
        height : 45,
        paddingLeft: 10,
        paddingRight : 10,
        position: 'absolute',
        bottom: 40,
        shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
        
    },

    plusIconContainer: {
        alignItems: 'center',
        justifyContent : 'center',
        height: 25,
        width: 25,
        borderRadius: 12.5,
        backgroundColor: '#fff',
        marginRight : 10,
    },
    dashboardContainer: {
        backgroundColor: '#461066',
        height: '25%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    

    body: {
        height: '65%',
        width :'100%',
        backgroundColor: 'rgba(150,138,138,0.2)',
        alignItems: 'center',

    },
    header: {
        height: '10%',
        backgroundColor: '#461066',
        justifyContent: 'flex-end',
        paddingBottom: 7,
    },
    headerLeftPartContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        width: '18%',
        justifyContent: 'space-between',
        paddingLeft: 10,
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    leftPartText: {
        color: '#fff',
        fontSize: 17,
        fontFamily :'Poppins_400Regular',
    },
    headerTitle: {
        color: '#fff',
        fontSize: 20,
        fontFamily :'Poppins_400Regular',
    },
})
export default MedicationOnScreen;