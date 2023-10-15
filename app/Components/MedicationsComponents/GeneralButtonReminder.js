import React, {useState} from 'react';
import { View, Text,StyleSheet, TouchableOpacity, Platform ,Modal} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import PickerOption from './PickerOption';
import PlusIcon from '../PlusIcon';
import SmallPillIcon from '../../assets/Icons/SmallPillIcon';
import DateIcon from '../../assets/Icons/DateIcon';
import TimeIcon from '../../assets/Icons/TimeIcon';
import CommentIcon from '../../assets/Icons/CommentIcon';
import QuantityIcon from '../../assets/Icons/QuantityIcon';
import AlarmIcon from '../../assets/Icons/AlarmIcon';
const GeneralButtonReminder = ({ icon, title, rightText, onDateSelect,onTimeSelect,onQuantitySelect,onMedicationSelect,onAlarmSelect,onCommentSelect}) =>
{
  let plusIcon;
  if (icon === 'comment') {
    plusIcon = <PlusIcon comment={onCommentSelect}/>; // Replace with your comment icon component
  }
  const [selectedValue1, setSelectedValue1] = useState('1');
  const [selectedValue2, setSelectedValue2] = useState('1');
  const [selectedValue3, setSelectedValue3] = useState('pill box >');
  const options1 = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
  ];
  const options2 = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
  ];
  const options3 = [
    { label: 'Doliprane', value: 'Doliprane' },
    { label: 'Dolostop', value: 'Dolostop' },
    { label: 'Galantamine' ,value: 'Galantamine' },
    { label: 'rivastigmine', value: 'rivastigmine' },
    { label: 'donepezil ', value: 'donepezil ' },
  ];
  let pickerComponent;
  if (icon === 'quantity') {
    pickerComponent = (
      <PickerOption
        righText={selectedValue1}
        selectedValue={selectedValue1}
        options={options1}
        onValueChange={(value) =>{
          setSelectedValue1(value);
          onQuantitySelect(value);
        }}
      />
    );
  } else if (icon === 'alarm') {
    pickerComponent = (
      <PickerOption
        righText={selectedValue2}

        selectedValue={selectedValue2}
        options={options2}
        onValueChange={(value) =>
        {
          setSelectedValue2(value);
          onAlarmSelect(value);
        }
}
      />
    );
  } else if (icon === 'pill')
  {
    pickerComponent = (
      <PickerOption
          righText={selectedValue3}

        selectedValue={selectedValue3}
        options={options3}
        onValueChange={(value) => {
          setSelectedValue3(value);
          onMedicationSelect(value);
        }}
      />
    );
    
  }

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  const [text, setText] = useState('');
  const [mouad, setMouad] = useState('');

    const onChange = (event, selectedDate) => {
  const currentDate = selectedDate || date;
  setShow(Platform.OS == 'ios');
  setDate(currentDate);

  if (modeType === 'time') {
    // Check if the mode is set to 'time'
    let tempDate = new Date(currentDate);
    let fTime = tempDate.getHours() + ':' + tempDate.getMinutes();
    setMouad(fTime);
    onTimeSelect(fTime);

    // Now 'fTime' contains the selected time value
    console.log('Selected Time:', fTime);
  } else {
    // Handle the date selection here
    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    setText(fDate);
    onDateSelect(fDate);

    // Now 'fDate' contains the selected date value
    console.log('Selected Date:', fDate);
  }
};

    const showMode = (currentMode) =>
    {
        setShow(true);
        setMode(currentMode);
    }
    const modeType = icon === 'date' ? 'date' : 'time';
    const pressDate = () => {
        showMode('date');
    };
    const pressTime = () =>
    {
        showMode('time');
    };
    const pressPill = () =>
    {
      console.log('pill pressed');

    };
    const pressQuantity = () =>
    {
      console.log('quantity pressed');

    };
    const pressComment = () =>
    {
        console.log('comment')
    };
    const pressAlarm = () =>
    {
      console.log('alarm pressed');

    };
    const iconFunctions = {
        pill: pressPill,
        date: pressDate,
        time: pressTime,
        quantity: pressQuantity,
        comment: pressComment,
        alarm : pressAlarm,
};
    const statusSvgPaths = {
    pill: (
      <SmallPillIcon/>
    ),
    date: (
      <DateIcon/>
    ),
      time: (
      <TimeIcon/>
        ),
      quantity: (
       <QuantityIcon/>
        ),
      comment: (
        <CommentIcon/>
        ),
      alarm: (
        <AlarmIcon/>     
            ),
    };
    return (

         <TouchableOpacity style={styles.generalButton} onPress={iconFunctions[icon]}>
          <View style={styles.generalButtonLeftSection}>
            {statusSvgPaths[icon]}
          </View>
                <View style={styles.generalButtonMiddleSection}><Text>{title}</Text></View>
          <View style={styles.generalButtonRightSection}>
                    <View style={styles.generalButtonRightTextContainer}><Text style={styles.generalButtonRightText}>{rightText}</Text></View>
          <View style={styles.rightArrowContainer}>{pickerComponent}{plusIcon}</View>
         {show && (
                <DateTimePicker testID='dateTimePicker' value={date}
                    mode={mode}
                    is24Hour={true}
                    display= 'default'
                onChange={onChange}/>
          )}
          
          <Text>{text}</Text>
          <Text>{mouad}</Text>
        </View>
        </TouchableOpacity>
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
    generalButton: {
    backgroundColor: '#fff',
    height: '10%',
    width : '100%',
        flexDirection: 'row',
        borderBottomColor: 'rgba(150,138,138,0.2)',
        borderBottomWidth: 1,
        marginBottom: 0,
        marginTop : 0,
  },
  generalButtonLeftSection: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems : 'center',
  },
  generalButtonMiddleSection : {
    height: '100%',
    width: '60%',
    flexDirection : 'row',
    alignItems: 'center',
  },
  generalButtonRightSection: {
    height: '100%',
    width: '20%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight : '2%',
  },
  generalButtonRightText: {
    color : '#9D9191', 
  },
  rightArrowContainer: {
    marginLeft : 10,
  },
})
export default GeneralButtonReminder;