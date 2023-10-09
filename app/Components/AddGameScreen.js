import React , {useState} from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import GeneralButtonReminder from './MedicationsComponents/GeneralButtonReminder';
import GeneralButtonGame from './GeneralButtonGame';
const AddGameScreen = ({ closeModal }) =>
{
  return (
      
    <View style={styles.container}>
      <View style={styles.header}>
        <SafeAreaView>

        <View style={styles.upperText}>
            <TouchableOpacity style={styles.cancelButton} onPress={closeModal}><Text style={styles.cancelText}>cancel</Text></TouchableOpacity>
            <Text style={styles.addReminderText}>Add new game</Text>
          </View>
          <View style={styles.iconSection}>
            <View style={styles.iconContainer}>
             <Svg
      width={60}
      height={60}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M26 5H6a5 5 0 00-5 5v10.79a5.17 5.17 0 003.21 4.86 4.81 4.81 0 005.34-1.2L13.78 20h4.44l4.23 4.45a4.8 4.8 0 005.34 1.2A5.17 5.17 0 0031 20.79V10a5 5 0 00-5-5zm-14 9h-2v2a1 1 0 01-2 0v-2H6a1 1 0 010-2h2v-2a1 1 0 112 0v2h2a1 1 0 010 2zm11 3a4 4 0 110-8 4 4 0 010 8zm2-4a2 2 0 11-3.999 0 2 2 0 014 0z"
        fill="#3B62C6"
      />
    </Svg>
            </View>
        </View>
          </SafeAreaView>
      </View>
      <View style={styles.body}>
        <View style={styles.generalSection}>
          <Text>GENERAL</Text>
        </View>

        <GeneralButtonGame title={'Medication name'} rightText={''} icon={'pill'} />
        <GeneralButtonGame title={'Date'} rightText={'20/11/2002'} icon={'date'} />
        <GeneralButtonGame title={'Time'} rightText={'14:26'} icon={'time'} />


        <View style={styles.generalSection}>
          <Text>More details</Text>
        </View>
        <GeneralButtonGame title={'Comment'} rightText={''} icon={'comment'} />
        <GeneralButtonGame title={'Alarm repititions'} rightText={''} icon={'alarm'} />
        <View style={styles.saveButtonContainer}>
                <TouchableOpacity activeOpacity={0.7} style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>save</Text>
                </TouchableOpacity>
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
        backgroundColor: '#3B62C6',
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
    backgroundColor: '#3B62C6',
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
export default AddGameScreen;