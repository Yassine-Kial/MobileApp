import React , {useState} from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import GeneralButtonReminder from '../Components/GeneralButtonReminder';
const AddReminderScreen = ({ closeModal }) =>
{
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
              <Svg
      width={60}
      height={60}
      viewBox="0 0 47 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#clip0_361_1671)">
        <Path
          d="M27.72 8.812c0 4.103-2.389 5.64-7.363 10.615A13.033 13.033 0 019.273 8.352l5.082-5.082A7.833 7.833 0 0127.72 8.812z"
          fill="#EDEBF2"
        />
        <Path
          d="M20.357 19.427l-6.002 6.031A7.845 7.845 0 113.27 14.355l6.002-6.003a13.033 13.033 0 0011.084 11.075z"
          fill="#DAD7E5"
        />
        <Path
          d="M17.987 18.859l-3.632 3.662a7.833 7.833 0 01-13.229-4.093c.568-3.075 2.046-3.976 8.147-10.076a13.023 13.023 0 008.714 10.507z"
          fill="#EDEBF2"
        />
        <Path
          d="M27.573 7.344c-.558 3.025-1.596 3.525-9.586 11.515A13.024 13.024 0 019.273 8.352l5.082-5.082a7.833 7.833 0 0113.218 4.074z"
          fill="#821655"
        />
        <Path
          d="M18.222 14.687c3.692-3.7 4.602-4.18 4.602-5.826 0-.778-.31-1.525-.861-2.075a.979.979 0 010-1.39c1.253-1.293 2.82 1.527 2.82 3.416 0 2.605-1.547 3.584-5.18 7.207a.98.98 0 01-1.38-1.332z"
          fill="#fff"
        />
        <Path
          d="M46.02 19.887c-4.102 4.504-16.645 2.83-16.645-2.262 0-.823 2.203-1.84 2.996-2.135 6.443-2.379 14.345.784 13.65 4.397z"
          fill="#821655"
        />
        <Path
          d="M46.02 19.583V23.5c0 2.702-3.916 4.896-8.812 4.896-4.896 0-8.812-2.194-8.812-4.896v-3.917c0 3.32 5.111 4.896 8.812 4.896 4.896 0 8.813-2.193 8.813-4.896z"
          fill="#821655"
        />
        <Path
          opacity={0.2}
          d="M46.02 19.583V23.5c0 2.702-3.916 4.896-8.812 4.896-4.896 0-8.812-2.194-8.812-4.896v-3.917c0 3.32 5.111 4.896 8.812 4.896 4.896 0 8.813-2.193 8.813-4.896z"
          fill="#000"
        />
        <Path
          d="M35.838 22.345l-1.812 1.811a12.737 12.737 0 01-2.115-.656c2.419-2.409.999-1.557 3.927-1.155z"
          fill="#fff"
        />
        <Path
          opacity={0.05}
          d="M35.838 22.345l-1.812 1.811a12.737 12.737 0 01-2.115-.656c2.419-2.409.999-1.557 3.927-1.155z"
          fill="#000"
        />
        <Path
          d="M42.506 15.667c-7.589 7.588-6.032 6.991-8.9 6.13L40.39 15c.723.16 1.43.383 2.115.666zm-14.11 21.541c0 3.3-5.111 4.896-8.813 4.896-6.53 0-10.917-3.916-7.833-7.148 4.191-4.435 16.646-2.888 16.646 2.252z"
          fill="#fff"
        />
        <Path
          d="M28.396 37.208c0 .98-2.938 2.272-4.788 2.634-4.847.98-12.25-.803-11.838-4.895 4.17-4.426 16.626-2.88 16.626 2.261z"
          fill="#821655"
        />
        <Path
          d="M28.396 37.208v3.917c0 2.702-3.917 4.896-8.813 4.896-4.896 0-8.812-2.194-8.812-4.896v-3.917c0 2.703 3.916 4.896 8.812 4.896 4.896 0 8.813-2.193 8.813-4.896z"
          fill="#821655"
        />
        <Path
          opacity={0.2}
          d="M28.396 37.208v3.917c0 2.702-3.917 4.896-8.813 4.896-4.896 0-8.812-2.194-8.812-4.896v-3.917c0 2.703 3.916 4.896 8.812 4.896 4.896 0 8.813-2.193 8.813-4.896z"
          fill="#000"
        />
        <Path
          d="M24.88 41.125c-.684.29-1.396.51-2.124.656l-1.635-1.635c3.26-.118 1.88-.91 3.76.98z"
          fill="#fff"
        />
        <Path
          opacity={0.1}
          d="M24.88 41.125c-.684.29-1.396.51-2.124.656l-1.635-1.635c3.26-.118 1.88-.91 3.76.98z"
          fill="#000"
        />
        <Path
          d="M23.578 39.882c-.82.154-1.652.246-2.487.274L14.315 33.3l2.125-.636 7.138 7.217z"
          fill="#821655"
        />
        <Path
          opacity={0.3}
          d="M23.578 39.882c-.82.154-1.652.246-2.487.274L14.315 33.3l2.125-.636 7.138 7.217z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_361_1671">
          <Path fill="#fff" d="M0 0H47V47H0z" />
        </ClipPath>
      </Defs>
    </Svg>
            </View>
            

        </View>
          





          </SafeAreaView>
      </View>



      <View style={styles.body}>


        <View style={styles.generalSection}>
          <Text>GENERAL</Text>
        </View>

        <GeneralButtonReminder title={'Medication name'} rightText={''} icon={'pill'} />
        <GeneralButtonReminder title={'Date'} rightText={'20/11/2002'} icon={'date'} />
        <GeneralButtonReminder title={'Time'} rightText={'14:26'} icon={'time'} />
        <GeneralButtonReminder title={'Quantity'} rightText={''} icon={'quantity'} />


        <View style={styles.generalSection}>
          <Text>More details</Text>
        </View>
        <GeneralButtonReminder title={'Comment'} rightText={''} icon={'comment'} />
        <GeneralButtonReminder title={'Alarm repititions'} rightText={''} icon={'alarm'} />
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
        backgroundColor: '#821655',
        
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
    backgroundColor: '#821655',
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