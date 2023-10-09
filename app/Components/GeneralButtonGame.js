import React, {useState} from 'react';
import { View, Text,StyleSheet, TouchableOpacity, Platform ,Modal} from 'react-native';
import Svg, { G, Path, Defs, ClipPath, Circle } from "react-native-svg";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import PickerOption from './MedicationsComponents/PickerOption';
import PlusIcon from './PlusIcon';
import PlusIconGame from './PlusIconGame';

const GeneralButtonGame = ({ icon, title, rightText }) =>

{


  let plusIconGame;

  if (icon === 'comment') {
    plusIconGame = <PlusIconGame/>; // Replace with your comment icon component
  }
  const [selectedValue1, setSelectedValue1] = useState('1');
  const [selectedValue2, setSelectedValue2] = useState('1');
  const [selectedValue3, setSelectedValue3] = useState('pill box >');
  const options1 = [
    { label: 'Option A', value: 'a' },
    { label: 'Option B', value: 'b' },
    // Add more options as needed
  ];

  const options2 = [
    { label: 'Option X', value: 'x' },
    { label: 'Option Y', value: 'y' },
    // Add more options as needed
  ];

  const options3 = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    // Add more options as needed
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
        }}
      />
    );
    
  }

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('20/11/2002');

    const onChange = (event, selectedDate) =>
    {
        const currentDate = selectedDate || date;
        setShow(Platform.OS == 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        let fTime = tempDate.getHours() + ':' + tempDate.getMinutes() + ':' + tempDate.getSeconds();
        setText(fDate);
    }

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
      <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M26 5H6a5 5 0 00-5 5v10.79a5.17 5.17 0 003.21 4.86 4.81 4.81 0 005.34-1.2L13.78 20h4.44l4.23 4.45a4.8 4.8 0 005.34 1.2A5.17 5.17 0 0031 20.79V10a5 5 0 00-5-5zm-14 9h-2v2a1 1 0 01-2 0v-2H6a1 1 0 010-2h2v-2a1 1 0 112 0v2h2a1 1 0 010 2zm11 3a4 4 0 110-8 4 4 0 010 8zm2-4a2 2 0 11-3.999 0 2 2 0 014 0z"
        fill="#3B62C6"
      />
    </Svg>
    ),
    date: (
      <Svg
      width={31}
      height={31}
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M26.64 3.19H4.36c-1.181 0-2.138.958-2.138 2.138v23.25c0 1.18.957 2.138 2.137 2.138h22.282c1.18 0 2.137-.957 2.137-2.138V5.328c0-1.18-.957-2.137-2.137-2.137z"
        fill="#fff"
        stroke="#461066"
        strokeWidth={0.4}
      />
      <Path
        d="M8.234 13.078H5.328v2.906h2.906v-2.906zM8.234 18.89H5.328v2.907h2.906V18.89zM8.234 24.703H5.328v2.906h2.906v-2.906zM19.86 13.078h-2.907v2.906h2.906v-2.906zM19.86 18.89h-2.907v2.907h2.906V18.89zM14.047 18.89H11.14v2.907h2.906V18.89zM14.047 24.703H11.14v2.906h2.906v-2.906zM19.86 24.703h-2.907v2.906h2.906v-2.906zM25.672 13.078h-2.906v2.906h2.906v-2.906zM25.672 18.89h-2.906v2.907h2.906V18.89z"
        fill="#3B62C6"
      />
      <Path
        d="M12.061 16.4h-.03a.485.485 0 01-.406-.267l-.969-1.938a.485.485 0 01.867-.433l.596 1.19 1.475-2.211a.484.484 0 11.806.538l-1.938 2.906a.483.483 0 01-.401.215zm11.625 11.625h-.03a.485.485 0 01-.406-.267l-.969-1.938a.485.485 0 01.867-.433l.596 1.19 1.474-2.211a.484.484 0 11.806.538l-1.937 2.906a.483.483 0 01-.401.215z"
        fill="#2AB2DD"
      />
      <Path
        d="M28.578 5.328v4.844H2.422V5.328a1.943 1.943 0 011.937-1.937h22.282a1.944 1.944 0 011.937 1.937z"
        fill="#3B62C6"
      />
      <Path
        d="M8.234 1.938a1.453 1.453 0 00-2.906 0v2.906a1.453 1.453 0 002.906 0V1.937zM25.672 1.938a1.453 1.453 0 00-2.906 0v2.906a1.453 1.453 0 002.906 0V1.937z"
        fill="#2AB2DD"
      />
    </Svg>
        
    ),
    time: (
      <Svg
      width={38}
      height={38}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#clip0_361_1798)">
        <Path
          d="M22.383 33.453c7.982-1.868 12.938-9.853 11.07-17.836C31.585 7.635 23.6 2.68 15.617 4.547 7.635 6.415 2.68 14.4 4.547 22.383c1.868 7.982 9.854 12.939 17.836 11.07z"
          fill="#FDD402"
        />
        <Path
          d="M31.469 19.071c0 .155 0 .32-.012.475a12.335 12.335 0 01-3.159 7.814 9.202 9.202 0 01-.82.855 12.44 12.44 0 01-7.884 3.313c-.202.012-.392.012-.594.012-.202 0-.392 0-.594-.012a12.443 12.443 0 01-7.79-3.23h-.012c-.291-.266-.569-.547-.83-.843a12.412 12.412 0 01-3.23-7.909c-.013-.154-.013-.32-.013-.475 0-.237.012-.475.012-.712a12.566 12.566 0 013.313-7.767c.27-.288.556-.561.855-.819a12.396 12.396 0 017.695-3.159c.202-.011.392-.011.594-.011.202 0 .392 0 .594.011a12.443 12.443 0 018.633 4.074 12.51 12.51 0 013.23 7.67v.072c.012.214.012.428.012.641z"
          fill="#fff"
        />
        <Path
          d="M11.792 28.298c-.292-.266-.57-.547-.831-.843a12.412 12.412 0 01-3.23-7.909c-.012-.154-.012-.32-.012-.475 0-.237.012-.475.012-.712a12.566 12.566 0 013.313-7.767c.27-.288.555-.561.855-.819a12.396 12.396 0 017.695-3.159c-.202-.011-.392-.011-.594-.011-.202 0-.392 0-.594.011a12.396 12.396 0 00-7.695 3.16c-.3.257-.585.53-.855.819a12.566 12.566 0 00-3.313 7.766c0 .237-.012.475-.012.712 0 .155 0 .32.012.475a12.412 12.412 0 003.23 7.909c.262.296.54.577.831.843h.012a12.443 12.443 0 007.79 3.23c.202.012.392.012.594.012.202 0 .392 0 .594-.012a12.443 12.443 0 01-7.79-3.23h-.012z"
          fill="#E0E0E2"
        />
        <Path
          d="M19.594 5.427v3.48a.594.594 0 01-1.188 0v-3.48c.202-.012.392-.012.594-.012.202 0 .392 0 .594.012zm0 23.667v3.622c-.202.011-.392.011-.594.011-.202 0-.392 0-.594-.011v-3.622a.594.594 0 011.188 0zm13.05-9.548h-3.598a.596.596 0 01-.228-1.144.587.587 0 01.228-.043h3.598v1.187zm-23.191-.593a.603.603 0 01-.594.593H5.356c-.012-.154-.012-.32-.012-.475 0-.237.012-.475.012-.712h3.503a.596.596 0 01.594.593zM29.413 9.5L26.6 12.303a.575.575 0 01-.831 0 .588.588 0 010-.844l2.802-2.802c.296.266.577.547.843.843zM12.326 26.576l-2.897 2.91h-.012c-.292-.266-.57-.548-.831-.844l2.909-2.909a.595.595 0 011.01.422.589.589 0 01-.179.421zm17.16 1.971a9.202 9.202 0 01-.82.855l-2.897-2.897a.588.588 0 010-.843.595.595 0 01.831 0l2.886 2.886zm-17.16-16.316a.603.603 0 01-.831 0L8.669 9.405c.27-.288.555-.562.855-.82l2.802 2.803a.589.589 0 010 .843zm6.68 5.498a.594.594 0 01-.593-.592l-.014-3.578a.593.593 0 01.592-.596h.001a.594.594 0 01.595.592l.013 3.577a.595.595 0 01-.591.596h-.003zm4.199 4.735a.596.596 0 01-.357-.12l-3.466-2.619a.595.595 0 01.506-1.049c.076.02.147.055.209.102l3.466 2.618a.594.594 0 01-.358 1.068z"
          fill="#3B62C6"
        />
        <Path
          d="M19 20.781a1.781 1.781 0 100-3.562 1.781 1.781 0 000 3.562z"
          fill="#3B62C6"
        />
        <Path
          d="M19 38a.594.594 0 010-1.188 17.813 17.813 0 000-35.624A.594.594 0 0119 0a19 19 0 010 38zm-3.577-.348a.595.595 0 01-.118-.011l-.299-.062a.594.594 0 01-.455-.706.604.604 0 01.706-.456l.283.06a.595.595 0 01-.117 1.175zm-2.577-.706a.61.61 0 01-.201-.035l-.287-.105a.592.592 0 01-.225-.961.594.594 0 01.642-.15l.272.098a.594.594 0 01-.2 1.153zM10.4 35.873a.582.582 0 01-.277-.07l-.221-.119a.617.617 0 01-.262-.817.572.572 0 01.782-.25l.257.138a.593.593 0 01-.279 1.118zm-2.263-1.418a.598.598 0 01-.348-.113l-.251-.188a.594.594 0 11.724-.941l.224.167a.594.594 0 01-.349 1.075zm-2.034-1.73a.592.592 0 01-.416-.17l-.215-.213a.595.595 0 01.843-.837l.205.204a.593.593 0 01-.417 1.017zm-1.763-2a.591.591 0 01-.474-.236l-.18-.241a.594.594 0 11.953-.708l.173.232a.594.594 0 01-.472.952zm-1.457-2.237a.594.594 0 01-.52-.306l-.145-.265a.594.594 0 011.045-.564l.139.254a.594.594 0 01-.52.881zm-1.118-2.42a.595.595 0 01-.555-.383l-.107-.292a.594.594 0 111.121-.392l.096.262a.594.594 0 01-.555.805zM1.01 23.51a.594.594 0 01-.58-.467l-.063-.303a.594.594 0 011.166-.23l.058.28a.596.596 0 01-.581.72zm-.374-2.643a.593.593 0 01-.592-.552l-.019-.307a.594.594 0 011.186-.062l.017.286a.594.594 0 01-.55.634l-.042.001zm.01-2.67L.6 18.197a.594.594 0 01-.547-.637l.025-.303a.594.594 0 111.183.104l-.024.29a.594.594 0 01-.592.548zm.39-2.64a.594.594 0 01-.58-.722l.07-.3a.593.593 0 111.155.279l-.065.278a.594.594 0 01-.58.465zm.773-2.556a.592.592 0 01-.555-.805l.113-.287a.594.594 0 011.101.442l-.105.268A.594.594 0 011.81 13zm1.135-2.417a.594.594 0 01-.517-.885l.152-.265a.594.594 0 011.026.597l-.143.251a.593.593 0 01-.518.302zm1.474-2.226a.594.594 0 01-.47-.956l.19-.242a.594.594 0 01.928.741l-.177.226a.593.593 0 01-.47.231zm1.78-1.99a.594.594 0 01-.413-1.02l.222-.212a.594.594 0 01.812.867l-.208.198a.593.593 0 01-.413.167zm2.047-1.713a.594.594 0 01-.35-1.075l.255-.18a.594.594 0 01.673.979l-.23.163a.59.59 0 01-.348.113zm2.27-1.4a.594.594 0 01-.276-1.12l.274-.14a.594.594 0 11.531 1.063l-.254.13a.588.588 0 01-.275.067zM12.964 2.2a.594.594 0 01-.194-1.155l.291-.098a.593.593 0 11.369 1.128l-.27.092a.585.585 0 01-.196.033zm2.578-.688a.594.594 0 01-.111-1.177l.302-.055a.594.594 0 11.202 1.17l-.28.051a.62.62 0 01-.113.01z"
          fill="#3492BA"
        />
        <Path
          d="M33.452 15.616a14.843 14.843 0 10-28.904 6.768 14.843 14.843 0 0028.904-6.768zm-1.995 3.93a12.335 12.335 0 01-3.159 7.814 9.254 9.254 0 01-.82.855 12.44 12.44 0 01-7.884 3.313c-.202.012-.392.012-.594.012-.202 0-.392 0-.594-.012a12.443 12.443 0 01-7.79-3.23h-.012c-.291-.266-.569-.547-.83-.843a12.412 12.412 0 01-3.23-7.909c-.013-.154-.013-.32-.013-.475 0-.237.012-.475.012-.712a12.566 12.566 0 013.313-7.766c.27-.289.556-.562.855-.82a12.397 12.397 0 017.695-3.159c.202-.011.392-.011.594-.011.202 0 .392 0 .594.011a12.443 12.443 0 018.633 4.074 12.509 12.509 0 013.23 7.67v.072c.012.214.012.428.012.641 0 .155 0 .32-.012.475z"
          fill="#3B62C6"
        />
        <Path
          d="M5.736 22.384A14.796 14.796 0 0119.524 4.182a14.831 14.831 0 10.14 29.637A14.834 14.834 0 015.735 22.384z"
          fill="#2BA8D6"
        />
        <Path
          d="M28.298 27.36a9.202 9.202 0 01-.82.855 12.44 12.44 0 01-7.884 3.313c.202.012.392.012.593.012.202 0 .392 0 .594-.012a12.44 12.44 0 007.885-3.313c.291-.267.565-.553.82-.855a12.335 12.335 0 003.158-7.814c.012-.154.012-.32.012-.475 0-.213 0-.427-.012-.641v-.071a12.51 12.51 0 00-4.073-8.515 12.443 12.443 0 00-7.79-3.23c-.202-.011-.392-.011-.593-.011-.202 0-.392 0-.594.011a12.443 12.443 0 018.633 4.074 12.51 12.51 0 013.23 7.67v.072c.012.214.012.428.012.641 0 .155 0 .32-.012.475a12.335 12.335 0 01-3.159 7.814z"
          fill="#2AB2DD"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_361_1798">
          <Path fill="#fff" d="M0 0H38V38H0z" />
        </ClipPath>
      </Defs>
    </Svg>

        ),
    
    
        quantity: ( <Svg
      width={40}
      height={40}
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M40.338 27.077c-.72-1.33-2.315-1.892-3.671-1.325l-9.165 3.35c0-.032.006-.063.006-.101a3.533 3.533 0 00-3.532-3.526H18.5l-1.148-.801a11.623 11.623 0 00-6.692-2.113H9.443v-.316c0-.984-.801-1.785-1.792-1.785H2.107c-.984 0-1.792.801-1.792 1.785v13.253c0 .984.808 1.785 1.792 1.785H7.65c.927 0 1.678-.707 1.773-1.602l3.992 2.434a11.553 11.553 0 0011.279.398l14.413-7.456a2.92 2.92 0 001.577-2.599c0-.473-.12-.952-.347-1.381zM8.18 35.497c0 .29-.24.524-.53.524H2.107a.528.528 0 01-.53-.523V22.245c0-.29.24-.523.53-.523H7.65c.29 0 .53.233.53.523v13.253zm30.346-5.563L24.114 37.39c-3.154 1.64-7.001 1.501-10.042-.353l-4.63-2.826V23.822h1.218c2.145 0 4.214.656 5.973 1.886l1.306.915c.101.075.227.113.36.113h5.677a2.272 2.272 0 012.113 3.097 2.306 2.306 0 01-.511.776 2.247 2.247 0 01-1.602.663h-6.1a.633.633 0 00-.63.63c0 .347.283.631.63.631h6.1c.94 0 1.829-.366 2.497-1.034.272-.271.492-.587.656-.921l9.998-3.652a1.662 1.662 0 012.1.744c.127.246.196.517.196.788a1.66 1.66 0 01-.896 1.476z"
        fill="#461066"
      />
      <Path
        d="M8.181 22.245v13.253c0 .29-.24.524-.53.524H2.107a.528.528 0 01-.53-.524V22.246c0-.29.24-.524.53-.524H7.65c.29 0 .53.233.53.523z"
        fill="#BA68C8"
      />
      <Circle
        cx={4}
        cy={4}
        r={4}
        transform="matrix(1 0 0 -1 17 20)"
        fill="#461066"
      />
      <Circle
        cx={4}
        cy={4}
        r={4}
        transform="matrix(1 0 0 -1 29 20)"
        fill="#461066"
      />
      <Circle
        cx={4}
        cy={4}
        r={4}
        transform="matrix(1 0 0 -1 23 11)"
        fill="#461066"
      />
    </Svg>
        

        ),
        
        comment: (
          <Svg
      width={40}
      height={40}
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M20.25 2.25H6.75a3.375 3.375 0 00-3.375 3.375V18a3.375 3.375 0 003.375 3.375h2.914l3.037 3.049a1.124 1.124 0 00.799.326c.268 0 .527-.096.731-.27l3.623-3.105h2.396A3.375 3.375 0 0023.625 18V5.625A3.375 3.375 0 0020.25 2.25zM21.375 18a1.125 1.125 0 01-1.125 1.125h-2.813c-.268 0-.527.096-.73.27l-3.15 2.7-2.633-2.644a1.124 1.124 0 00-.799-.326H6.75A1.125 1.125 0 015.625 18V5.625A1.125 1.125 0 016.75 4.5h13.5a1.125 1.125 0 011.125 1.125V18z"
        fill="#3B62C6"
      />
    </Svg>  
        ),

        alarm: (

           <Svg
      width={31}
      height={31}
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M16.695 28.645c6.706-.66 11.608-6.63 10.949-13.337-.66-6.706-6.63-11.608-13.337-10.949C7.601 5.02 2.7 10.99 3.358 17.696c.66 6.707 6.63 11.609 13.337 10.95z"
        fill="#3B62C6"
      />
      <Path
        d="M10.569 27.658l-1.792 2.78c-.233.368-.63.562-1.032.562-.228 0-.455-.058-.663-.189a1.229 1.229 0 01-.369-1.695l1.715-2.67 2.141 1.212zm11.993-1.216l1.715 2.669a1.223 1.223 0 01-.363 1.695c-.209.131-.436.19-.664.19-.407 0-.8-.195-1.037-.558l-1.792-2.78 2.141-1.216zM16.096 4.316V1.477h-1.473v2.834c0 .01 0 .014.005.024l1.468-.02zm2.91-2.843H11.95a.736.736 0 110-1.473h7.057a.736.736 0 110 1.472z"
        fill="#3492BA"
      />
      <Path
        d="M22.912 22.62c3.378-4.094 2.8-10.15-1.294-13.53A9.61 9.61 0 008.09 10.384a9.61 9.61 0 0014.822 12.235z"
        fill="#fff"
      />
      <Path
        d="M14.764 26.084v-1.56a.736.736 0 111.472 0v1.56a6.514 6.514 0 01-1.472 0zm10.317-8.845h-1.56a.736.736 0 110-1.473h1.56c.053.48.058.979 0 1.473zM16.236 6.922v1.56a.736.736 0 11-1.472 0v-1.56a6.508 6.508 0 011.472 0zM5.92 15.766h1.56a.736.736 0 110 1.473h-1.56a6.509 6.509 0 010-1.473zM27.12 7.871a3.393 3.393 0 10-5.004-4.587l5.004 4.587zm-23.24 0a3.393 3.393 0 115.004-4.587L3.88 7.871z"
        fill="#2AB2DD"
      />
      <Path
        d="M8.467 6.539c-.015-.029-.039-.053-.063-.077l-1.43-1.434-1.08.993c.006.01.01.014.02.024l1.405 1.41 1.148-.916zm15.21.916l1.409-1.41a.086.086 0 00.02-.024l-1.086-.998-1.429 1.429a.338.338 0 00-.063.082l1.148.92zM14.41 16.096l-2.935-2.935a.5.5 0 010-.713.5.5 0 01.712 0l2.935 2.936M16.537 15.965h2.63a.503.503 0 110 1.008h-2.635"
        fill="#3492BA"
      />
      <Path
        d="M16.648 16.469a1.147 1.147 0 11-2.294.001 1.147 1.147 0 012.294-.001z"
        fill="#3B62C6"
      />
    </Svg>   
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
          <View style={styles.rightArrowContainer}>{pickerComponent}{plusIconGame}</View>
         {show && (
                <DateTimePicker testID='dateTimePicker' value={date}
                    mode={mode}
                    is24Hour={true}
                    display= 'default'
                onChange={onChange}/>
                )}
        

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
export default GeneralButtonGame;