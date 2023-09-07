import React , {useState} from 'react';
import { View, StyleSheet, TouchableOpacity, Text, StatusBar, SafeAreaView, ScrollView, Modal} from 'react-native';
import Svg, { Circle, Path } from "react-native-svg";
import Games from '../Components/Games';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from '@expo-google-fonts/poppins';
import GamesInfo from '../Components/GamesInfo';

function GamesScreen(props)
{
    const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    });

    // Step 2: Add state for modal visibility
  const [modalVisible, setModalVisible] = useState(false);

  // Step 3: Create function to toggle modal visibility
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

    return (
        <View>
            <StatusBar
                barStyle="light-content" />



            <View style={styles.header}>

                <SafeAreaView style={styles.headerContent}>
                    
                    <TouchableOpacity  onPress={toggleModal} activeOpacity={0.2} style={styles.headerLeftPartContainer}>
                        <View style={styles.iconContainer}>
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
                    <View style={styles.headerTitleContainer}><Text style={styles.headerTitle}>Games</Text></View>
                </SafeAreaView>
            </View>
             <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
                    <GamesInfo toggleModal={toggleModal}/>
        </View>
      </Modal>


            <View style={styles.body}>


                 <View style={styles.gameSectionTitleContainer}>
                    <Text style={styles.gameSectionTitle}>Problem Solving</Text>
                </View>
                <ScrollView horizontal={true} style={styles.scrollView}>
        {/* Content for the first horizontal scroll view */}
                    <Games title={'Suduko'} backgroundColor={'green'} />
                                <Games title={'Suduko'} backgroundColor={'brown'} />

                                <Games title={'Suduko'} backgroundColor={'red'} />

                                <Games title={'Suduko'} backgroundColor={'orange'} />

                                <Games title={'Suduko'} backgroundColor={'blue'} />

                                <Games title={'Suduko'} backgroundColor={'pink'} />
                </ScrollView>
                
                
                <View style={styles.gameSectionTitleContainer}>
                    <Text style={styles.gameSectionTitle}>Speed</Text>
                </View>
                <ScrollView horizontal={true} style={styles.scrollView}>
        {/* Content for the first horizontal scroll view */}
                    <Games title={'Suduko'} backgroundColor={'green'} />
                                <Games title={'Suduko'} backgroundColor={'brown'} />

                                <Games title={'Suduko'} backgroundColor={'red'} />

                                <Games title={'Suduko'} backgroundColor={'orange'} />

                                <Games title={'Suduko'} backgroundColor={'blue'} />

                                <Games title={'Suduko'} backgroundColor={'pink'} />
                </ScrollView>
                
                <View style={styles.gameSectionTitleContainer}>
                    <Text style={styles.gameSectionTitle}>Memory</Text>
                </View>
                <ScrollView horizontal={true} style={styles.scrollView}>
        {/* Content for the first horizontal scroll view */}
                    <Games title={'Suduko'} backgroundColor={'green'} />
                                <Games title={'Suduko'} backgroundColor={'brown'} />

                                <Games title={'Suduko'} backgroundColor={'red'} />

                                <Games title={'Suduko'} backgroundColor={'orange'} />

                                <Games title={'Suduko'} backgroundColor={'blue'} />

                                <Games title={'Suduko'} backgroundColor={'pink'} />
                </ScrollView>
            </View>
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
  

    gameSectionTitleContainer: {
        paddingLeft: '5%',
        marginBottom : '4%',
    },
    gameSectionTitle: {
        fontSize: 25,
        color: '#461066',
      fontWeight : 'bold',
    },

    scrollView: {
        paddingLeft: '5%',

        
    },

    sleep: {
        position: 'absolute',
        top: 100,
        right : 150,
    },
     body: {
        backgroundColor: 'rgba(219,211,215,0.26)',
        height: '90%',
        paddingTop : '8%',
    },
    headerRightPartContainer: {
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        width: '18%',
        paddingRight: 10,
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
        left: '2%',
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
export default GamesScreen;