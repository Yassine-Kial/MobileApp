import React , {useState, useEffect} from 'react';
import { SafeAreaView, View, StyleSheet,Text,TouchableOpacity, TextInput, Modal} from 'react-native';
import Svg, { Circle, Path , G, Rect, Defs, ClipPath} from "react-native-svg";
import { StatusBar } from 'react-native';
import GamesInfo from './ServiceInformations/GamesInfo';

import {
    useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from '@expo-google-fonts/poppins';
import CustomTextInput from './CustomTextInput';

function Profile({ navigation })
{
    const [modalTimeout, setModalTimeout] = useState(null);

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
  toggleModal(); // Close the modal after handling the input
  clearTimeout(modalTimeout); // Clear the timeout
  };
    
    useEffect(() => {
  if (isModalVisible) {
    const timeoutId = setTimeout(() => {
      toggleModal(); // Close the modal automatically after 10 seconds
    }, 500); // 10000 milliseconds (10 seconds)
    setModalTimeout(timeoutId); // Store the timeout ID in state
  }
}, [isModalVisible]);

    const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    });
    return (
        <View>
            <StatusBar
                barStyle="light-content"  // Use "dark-content" for light background
      />
            <View style={styles.header}>
                <SafeAreaView style={styles.headerContent}>
                    
                    <TouchableOpacity activeOpacity={0.2} style={styles.headerLeftPartContainer} onPress={() => navigation.goBack()}>
                        <View style={styles.iconContainer}>
                            <Svg
                                width={17}
                                height={28}
                                viewBox="0 0 17 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <Path
                                    d="M.65 15.592L12.475 27.26c.83.834 2.077.837 2.91.007.834-.83.836-2.077.007-2.91L5.228 13.939 15.437 3.568c.833-.83.836-2.077.006-2.91-.415-.417-.83-.626-1.454-.627-.623-.002-1.04.205-1.456.62L.658 12.266c-.834 1.038-.837 2.285-.007 3.326 0-.208 0-.208 0 0z"
                                    fill="#fff"
                                />
                            </Svg>
                        </View>
                            <View><Text style={styles.leftPartText}>Back</Text></View>
                    </TouchableOpacity>
                    <View style={styles.headerTitleContainer}><Text style={styles.headerTitle}>Profile</Text></View>
                </SafeAreaView>
            </View>
            <View style={styles.body}>

                <View style={styles.profilePhotoContainer}>
                    <TouchableOpacity style={styles.profilePhoto}>
                            <Svg
      width={150}
      height={150}
      viewBox="0 0 232 232"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M116 0C52.2 0 0 52.2 0 116s52.2 116 116 116c64.163 0 116-52.2 116-116S180.163 0 116 0zm0 225.112C55.825 225.112 6.888 176.175 6.888 116S55.825 6.888 116 6.888 225.112 55.825 225.112 116 176.175 225.112 116 225.112z"
        fill="#5D2E79"
      />
      <Path
        d="M116 6.889C55.825 6.889 6.888 55.826 6.888 116S55.825 225.114 116 225.114s109.113-48.938 109.113-109.113S176.175 6.889 116 6.889zm0 39.15c17.4 0 31.9 14.137 31.9 31.9 0 17.4-14.137 31.9-31.9 31.9-17.4 0-31.9-14.138-31.9-31.9.363-17.4 14.5-31.9 31.9-31.9zM173.638 182.7H58.363c-1.813 0-3.625-1.45-3.625-3.625 0-33.712 27.55-61.262 61.262-61.262 33.713 0 61.263 27.55 61.263 61.262 0 2.175-1.45 3.625-3.625 3.625z"
        fill="#EDEDED"
      />
      <Path
        d="M116 6.889C55.825 6.889 6.888 55.826 6.888 116S55.825 225.114 116 225.114s109.113-48.938 109.113-109.113S176.175 6.889 116 6.889zm0 210.975c-56.187 0-101.862-45.675-101.862-101.863C14.138 59.814 59.813 14.139 116 14.139c56.188 0 101.863 45.675 101.863 101.862 0 56.188-45.675 101.863-101.863 101.863z"
        fill="#D6D6D6"
      />
      <Path
        d="M116 117.812c-33.713 0-61.263 27.551-61.263 61.263 0 1.813 1.45 3.625 3.625 3.625H174c1.812 0 3.625-1.45 3.625-3.625-.363-33.712-27.913-61.263-61.625-61.263zm-54.013 58c1.813-28.275 25.375-50.75 54.013-50.75 28.637 0 52.2 22.475 54.012 50.75H61.987z"
        fill="#5D2E79"
      />
      <Path
        d="M170.012 175.812H61.987c1.813-28.275 25.375-50.75 54.013-50.75 28.637 0 52.2 22.475 54.012 50.75zM116 46.038c-17.4 0-31.9 14.138-31.9 31.9 0 17.4 14.137 31.9 31.9 31.9 17.4 0 31.9-14.137 31.9-31.9 0-17.4-14.5-31.9-31.9-31.9zm0 56.55c-13.775 0-24.65-10.875-24.65-24.65 0-13.775 11.237-24.65 24.65-24.65 13.775 0 24.65 11.238 24.65 24.65 0 13.413-10.875 24.65-24.65 24.65z"
        fill="#5D2E79"
      />
      <Path
        d="M140.65 77.938c0 13.775-11.238 24.65-24.65 24.65-13.775 0-24.65-10.875-24.65-24.65 0-13.775 11.237-24.65 24.65-24.65 13.775 0 24.65 10.875 24.65 24.65z"
        fill="#5D2E79"
      />
      <Path
        d="M116 125.062c-28.638 0-52.2 22.475-54.013 50.75h108.388c-2.175-28.275-25.738-50.75-54.375-50.75zm0 5.438c23.562 0 43.862 17.037 47.85 39.875h-95.7C72.137 147.537 92.437 130.5 116 130.5z"
        fill="#5D2E79"
        fillOpacity={0.5}
      />
      <Path
        d="M116 53.288c-13.775 0-24.65 11.238-24.65 24.65 0 13.413 11.237 24.65 24.65 24.65 13.775 0 24.65-10.875 24.65-24.65 0-13.775-10.875-24.65-24.65-24.65zm0 43.863c-10.513 0-19.213-8.7-19.213-19.213 0-10.512 8.7-19.212 19.213-19.212 10.512 0 19.212 8.7 19.212 19.212 0 10.513-8.7 19.213-19.212 19.213z"
        fill="#5D2E79"
      />
    </Svg>
                    </TouchableOpacity>
                </View>
                <View style={styles.formContainer}>


                    <View style={styles.formHori}>

                    <CustomTextInput label={"First name"} onFocusColor={"#461066"} placeholder={"Yassine"} width={170} locked={false} password={false}/>
                    <CustomTextInput style={styles.lastName} label={"Last name"} onFocusColor={"#461066"} placeholder={"KIAL"} width={170} locked={false} password={false} />

                    </View>
                    <CustomTextInput label={"Age"} onFocusColor={"#461066"} placeholder={"your name"} width={350} locked={false} password={false}/>
                    <CustomTextInput label={"Email"} onFocusColor={"#461066"} placeholder={"kialmohamedyassine@gmail.com"} width={350} locked={true} password={false} />
                    <CustomTextInput label={"Password"} onFocusColor={"#461066"} placeholder={"password"} width={350} locked={false} password={true} />
                    <CustomTextInput label={"Confirm password"} onFocusColor={"#461066"} placeholder={"your email"} width={350} locked={false} password={true}/>

                </View>


                <View style={styles.btnHori}>

                    <TouchableOpacity onPress={toggleModal} activeOpacity={0.7} style={styles.saveButton}>
                    <Text style={styles.saveButtonText}>save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={styles.logoutButton} onPress={() => navigation.navigate('OnBoardingAllScreen')}>
                    <Text style={styles.logoutButtonText}>log out</Text>
                    </TouchableOpacity>   
                    
                  <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
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
      <G clipPath="url(#clip0_779_908)">
        <Rect width={81} height={81} rx={40.5} fill="#D92222" />
        <Path
          d="M40.5 0a40.5 40.5 0 100 81 40.5 40.5 0 000-81zm0 74.25a33.75 33.75 0 110-67.5 33.75 33.75 0 010 67.5z"
          fill="#fff"
        />
        <Path
          d="M45.457 40.511l11.516 11.517a3.491 3.491 0 010 4.942 3.491 3.491 0 01-4.941 0L40.514 45.453 28.998 56.97a3.496 3.496 0 11-4.944-4.942l11.519-11.517-11.545-11.544A3.492 3.492 0 0126.498 23c.895 0 1.79.341 2.472 1.025l11.545 11.544 11.517-11.516a3.487 3.487 0 012.471-1.024 3.492 3.492 0 012.47 5.966L45.457 40.51z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_779_908">
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
                </View>
            </View>
</View>
    );
}
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
    logoutButtonText: {
        color: '#461066', 
        fontWeight :'700',
    },
    saveButtonText: {
        color: '#fff',  
        fontWeight :'700',
    },
    saveButton: {
        backgroundColor: '#461066',
        marginTop : 20,
        paddingLeft: 50,
        paddingRight: 50,
      borderRadius: 3,
    marginBottom: 20,
    height: 40,
    justifyContent: 'center',
    alignItems : 'center',   
    },
    logoutButton: {

        backgroundColor: '#fff',
        borderColor: '#461066',
        borderWidth : 2,
        paddingLeft: 50,
        paddingRight: 50,
      borderRadius: 3,
    height: 40,
    justifyContent: 'center',
    alignItems : 'center',  
    },
    profilePhotoContainer: {    
    },

    formHori: {
        flexDirection: 'row',
        width : '100%',
    },

    formContainer: {
        width: '100%', 
        paddingTop : 20,
        paddingLeft : 20,
    },



    header: {
        height: '10%',
        backgroundColor: '#461066',
        justifyContent: 'flex-end',
        paddingBottom: 7,
    },
    body: {
        backgroundColor: '#fff',
        height: '90%',
        alignItems: 'center',
        paddingTop : 10,
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

    bellIconContainer: {
        marginBottom : 50,
    },
})
export default Profile;
