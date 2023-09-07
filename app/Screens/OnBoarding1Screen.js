import React from 'react';
import { Image, SafeAreaView,StyleSheet, View,Text, TouchableOpacity } from 'react-native';
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import {
    useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from '@expo-google-fonts/poppins';
function OnBoarding1Screen(props)
{
    
     const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
     });
    
    

    return (
      <SafeAreaView style={styles.OnBoardingScreen1Container}>
        
            {/* <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')}/>
            </View>  */}
            

            <View style={styles.primaryTextContainer}>
                <Text>
                    <Text style={styles.OnBoardingPrimaryText}>Hi there, I'am </Text>
                    <Text style={styles.OnBoardingPrimaryHighlitedText}>Memento</Text>
                    </Text>
            </View>

            <View style={styles.imageContainer}>
                <Svg
      width={363}
      height={360}
      viewBox="0 0 363 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_50_7340)">
        <Path
          d="M42.645 69.905l1.764-2.88c14.898-24.343 41.825-39.017 70.219-37.231a73.81 73.81 0 0110.89 1.476c25.817 5.479 48.279 24.84 57.586 49.636 5.474 14.58 7.006 31.371 17.424 42.948 13.526 15.063 36.489 15.538 56.672 14.912 20.183-.627 43.161-.094 56.628 15.033 8.429 9.468 11.108 22.939 10.433 35.619-1.801 33.58-25.41 63.612-55.401 78.537-29.992 14.926-65.34 16.258-98.185 9.691-45.999-9.194-89.755-34.452-116.05-73.44-26.297-38.988-33.02-92.196-11.98-134.301zM51.517 284.162c10.056 0 18.208-8.084 18.208-18.057 0-9.973-8.152-18.058-18.208-18.058s-18.208 8.085-18.208 18.058c0 9.973 8.152 18.057 18.208 18.057z"
          fill="#821655"
        />
        <Path
          d="M113.298 154.928l-30.58-3.14-12.951-29.152-10.063 2.599s7.435 30.809 15.755 35.582c8.32 4.774 36.742 5.631 36.742 5.631l1.097-11.52z"
          fill="#461066"
        />
        <Path
          d="M129.554 169.755c4.976-5.552 4.471-14.053-1.127-18.987-5.599-4.935-14.171-4.434-19.146 1.118-4.976 5.552-4.471 14.053 1.127 18.987 5.598 4.935 14.17 4.434 19.146-1.118z"
          fill="#fff"
        />
        <Path
          d="M119.418 174.281c-3.143 0-6.188-1.08-8.617-3.058a13.452 13.452 0 01-4.706-7.785 13.375 13.375 0 011.343-8.978 13.546 13.546 0 016.782-6.096 13.69 13.69 0 019.141-.445 13.574 13.574 0 017.351 5.407 13.384 13.384 0 01-1.689 17.01 13.522 13.522 0 01-4.404 2.926 13.579 13.579 0 01-5.201 1.019zm0-26.899a13.612 13.612 0 00-8.597 3.041 13.41 13.41 0 00-4.701 7.759 13.334 13.334 0 001.33 8.956 13.501 13.501 0 006.756 6.086 13.65 13.65 0 009.116.454 13.539 13.539 0 007.338-5.384 13.35 13.35 0 00-1.666-16.966 13.537 13.537 0 00-9.576-3.946zM79.977 163.12c5.462-1.3 8.828-6.746 7.516-12.163-1.311-5.417-6.802-8.754-12.264-7.454-5.463 1.301-8.828 6.746-7.516 12.164 1.311 5.417 6.802 8.754 12.264 7.453zM69.88 124.993a8.196 8.196 0 000-11.659c-3.247-3.22-8.51-3.22-11.757 0a8.196 8.196 0 000 11.659c3.247 3.219 8.51 3.219 11.756 0z"
          fill="#fff"
        />
        <Path
          d="M76.958 114.702l-6.845 5.732-2.469-2.899 6.845-5.732c.36-.302.827-.45 1.297-.41.47.039.906.262 1.21.619l.168.198a1.762 1.762 0 01.419 1.289 1.75 1.75 0 01-.625 1.203zM68.264 104.204v8.64a.251.251 0 01-.254.252H64.7a.252.252 0 01-.254-.252v-8.64c0-.468.186-.917.52-1.248a1.785 1.785 0 011.258-.516h.261c.472 0 .924.185 1.258.516.334.331.52.78.52 1.248zM62.1 104.236L64 112.668a.25.25 0 01-.192.301l-3.23.717a.258.258 0 01-.304-.191l-1.902-8.432a1.752 1.752 0 01.233-1.33 1.777 1.777 0 011.114-.776l.255-.057a1.79 1.79 0 011.341.232c.399.25.68.648.783 1.104zM55.468 106.349l4.356 7.483a.25.25 0 01-.093.344l-2.867 1.642a.257.257 0 01-.347-.093l-4.356-7.482a1.753 1.753 0 01.65-2.41l.227-.129a1.792 1.792 0 011.35-.177c.455.121.844.417 1.08.822z"
          fill="#fff"
        />
        <Path
          d="M246.198 230.448l9.153-3.86-26.411-61.586-9.152 3.861 26.41 61.585z"
          fill="#461066"
        />
        <Path
          d="M230.252 170.887c4.842-5.667 4.134-14.154-1.581-18.955-5.715-4.802-14.273-4.1-19.114 1.568-4.841 5.668-4.133 14.155 1.581 18.956 5.715 4.801 14.273 4.099 19.114-1.569z"
          fill="#fff"
        />
        <Path
          d="M219.933 175.692a13.685 13.685 0 01-6.126-1.443 13.559 13.559 0 01-4.812-4.026 13.38 13.38 0 01-2.058-11.976 13.459 13.459 0 014.024-6.147 13.617 13.617 0 016.675-3.146 13.686 13.686 0 017.347.787 13.563 13.563 0 015.843 4.487 13.37 13.37 0 011.207 14.054 13.506 13.506 0 01-4.993 5.402 13.659 13.659 0 01-7.107 2.008zm0-26.913a13.624 13.624 0 00-7.097 1.999 13.485 13.485 0 00-4.988 5.391 13.338 13.338 0 001.202 14.029 13.539 13.539 0 005.834 4.478c2.325.929 4.864 1.2 7.335.783a13.596 13.596 0 006.661-3.145 13.43 13.43 0 004.012-6.14 13.345 13.345 0 00-.974-10.231 13.531 13.531 0 00-7.978-6.559 13.73 13.73 0 00-4.051-.605h.044zM247.364 202.407c1.504-5.368-1.665-10.928-7.077-12.42-5.412-1.491-11.019 1.651-12.523 7.018-1.504 5.368 1.664 10.928 7.076 12.42 5.413 1.492 11.02-1.65 12.524-7.018zM252.9 239.348c4.591 0 8.313-3.691 8.313-8.244s-3.722-8.244-8.313-8.244c-4.591 0-8.313 3.691-8.313 8.244s3.722 8.244 8.313 8.244z"
          fill="#fff"
        />
        <Path
          d="M242.028 239.406l4.655-7.575 3.267 1.975-4.655 7.575a1.783 1.783 0 01-2.445.588l-.223-.135c-.2-.12-.375-.278-.514-.465a1.781 1.781 0 01-.294-.626 1.739 1.739 0 01.209-1.337zM253.617 246.63l-2.758-8.195a.252.252 0 01.16-.319l3.141-1.04a.256.256 0 01.321.159l2.759 8.196a1.743 1.743 0 01-.113 1.346 1.777 1.777 0 01-1.039.872l-.248.082a1.787 1.787 0 01-2.223-1.101zM259.461 244.666l-4.496-7.4a.243.243 0 01-.029-.191.243.243 0 01.042-.089.242.242 0 01.073-.066l2.836-1.695a.252.252 0 01.192-.029.274.274 0 01.09.042.27.27 0 01.066.073l4.497 7.4c.243.401.316.881.202 1.336a1.764 1.764 0 01-.808 1.086l-.224.134a1.796 1.796 0 01-1.346.201 1.776 1.776 0 01-1.095-.802zM265.073 240.586l-6.521-5.73a.252.252 0 01-.022-.356l2.191-2.452a.256.256 0 01.359-.021l6.521 5.729a1.756 1.756 0 01.151 2.49l-.173.194a1.79 1.79 0 01-2.506.146z"
          fill="#fff"
        />
        <Path
          d="M115.389 146.82s.98 94.421 54.406 96.264c53.426 1.844 55.67-95.587 55.67-96.264 0 0-6.309-14.076-55.038-13.528-48.73.547-55.038 13.528-55.038 13.528z"
          fill="#461066"
        />
        <Path
          d="M145.387 130.203h45.157c2.947 0 5.336-2.37 5.336-5.292v-.771c0-2.922-2.389-5.292-5.336-5.292h-45.157c-2.947 0-5.336 2.37-5.336 5.292v.771c0 2.922 2.389 5.292 5.336 5.292zM166.02 46.244h3.898V26.696h-3.898v19.548z"
          fill="#fff"
        />
        <Path
          d="M227.58 104.439c6.156-1.451 9.96-7.576 8.497-13.68-1.463-6.106-7.639-9.878-13.795-8.427-6.155 1.45-9.96 7.576-8.496 13.68 1.463 6.105 7.639 9.878 13.794 8.427zM111.821 103.701c6.171-1.388 10.038-7.474 8.638-13.593-1.399-6.12-7.536-9.955-13.706-8.567-6.171 1.388-10.038 7.474-8.638 13.593 1.4 6.12 7.536 9.955 13.706 8.567z"
          fill="#461066"
        />
        <Path
          d="M165.7 42.003s-46.58-.555-53.941 39.485c-7.362 40.039 32.016 40.759 43.349 41.515 5.133.345 16.124.381 25.824.209 21.475-.368 36.648-4.486 41.81-24.243a36.645 36.645 0 001.154-7.077c1.358-21.687-13.401-50.955-58.196-49.89z"
          fill="#461066"
        />
        <Path
          d="M199.488 102.944l-67.67 1.044a12.954 12.954 0 01-4.937-.886 12.847 12.847 0 01-4.218-2.694 12.73 12.73 0 01-2.856-4.091 12.646 12.646 0 01-1.057-4.865 12.632 12.632 0 01.896-4.897 12.738 12.738 0 012.718-4.183 12.858 12.858 0 014.127-2.832 12.942 12.942 0 014.906-1.048l67.67-1.044c1.689-.03 3.367.27 4.939.884a12.852 12.852 0 014.219 2.694 12.726 12.726 0 012.855 4.092 12.631 12.631 0 011.055 4.866c.03 1.675-.274 3.34-.893 4.898a12.725 12.725 0 01-2.719 4.184 12.83 12.83 0 01-4.128 2.831 12.932 12.932 0 01-4.907 1.047z"
          fill="#fff"
        />
        <Path
          d="M145.881 90.063a4.086 4.086 0 01-1.124 2.096 4.157 4.157 0 01-4.492.897 4.12 4.12 0 01-1.854-1.502 4.063 4.063 0 01-.011-4.544 4.117 4.117 0 011.846-1.51 4.157 4.157 0 013.871.367 4.073 4.073 0 011.764 4.195zM193.136 89.314a4.077 4.077 0 01-1.121 2.099 4.156 4.156 0 01-4.492.902 4.114 4.114 0 01-1.856-1.5 4.057 4.057 0 01-.014-4.546 4.121 4.121 0 011.848-1.512 4.154 4.154 0 012.382-.238 4.127 4.127 0 012.627 1.73c.61.9.835 2.001.626 3.065z"
          fill="#461066"
        />
        <Path
          d="M186.333 184.318a18.177 18.177 0 01-3.84 9.897 18.418 18.418 0 01-8.738 6.113 18.56 18.56 0 01-10.689.269 18.438 18.438 0 01-9.039-5.666 18.19 18.19 0 01-4.342-9.691 18.134 18.134 0 011.819-10.45 18.342 18.342 0 017.366-7.687 18.544 18.544 0 0110.431-2.333 18.485 18.485 0 0112.597 6.277 18.175 18.175 0 014.435 13.271z"
          fill="#fff"
        />
        <Path
          d="M181.346 183.958a13.255 13.255 0 01-2.801 7.213 13.419 13.419 0 01-6.369 4.454 13.532 13.532 0 01-7.791.194 13.44 13.44 0 01-6.587-4.131 13.262 13.262 0 01-3.162-7.065 13.216 13.216 0 011.328-7.616 13.368 13.368 0 015.371-5.6 13.517 13.517 0 017.603-1.698 13.5 13.5 0 015.05 1.381 13.422 13.422 0 014.132 3.193 13.225 13.225 0 013.226 9.675z"
          fill="#461066"
        />
        <Path
          d="M174.877 186.377a13.007 13.007 0 01-.123-2.196 221.755 221.755 0 01-.066-5.76l.145.267-6.904-3.996h.385l-6.97 3.88c-.188.317.254-.424.211-.345v2.052c0 .677 0 1.353-.036 2.016 0 1.325-.051 2.606-.073 3.845l-.189-.332 6.825 4.133h-.305a391.8 391.8 0 015.082-2.664 14.125 14.125 0 012.011-.936c-.542.438-1.125.821-1.743 1.145-1.176.72-2.904 1.735-5.082 2.981l-.152.086-.153-.086-6.911-3.996-.189-.108v-.231c0-1.238.015-2.52.044-3.844v-4.032c-.044.079.399-.656.21-.346l6.992-3.845.203-.108.189.115 6.817 4.133.152.094v.173c-.08 2.491-.16 4.492-.232 5.853.018.687-.028 1.374-.138 2.052zM172.516 30.805a6.333 6.333 0 000-9.011 6.462 6.462 0 00-9.086 0 6.335 6.335 0 000 9.011 6.462 6.462 0 009.086 0zM157.707 88.176c.305.036.153 1.44 1.053 3.363a8.498 8.498 0 002.178 2.88 7.118 7.118 0 003.869 1.706 7.236 7.236 0 004.124-.979 8.567 8.567 0 002.672-2.412c1.234-1.706 1.343-3.14 1.648-3.118.123 0 .247.36.247 1.037a6.33 6.33 0 01-.726 2.765 8.531 8.531 0 01-2.904 3.19 7.87 7.87 0 01-10.092-.915 8.437 8.437 0 01-2.265-3.657 6.209 6.209 0 01-.232-2.88c.123-.67.312-1.001.428-.98z"
          fill="#461066"
        />
        <Path
          d="M219.729 106.832c-.072 0 .763-1.296 1.568-3.564a38.31 38.31 0 001.888-9.173 67.08 67.08 0 00.218-9.36 78.219 78.219 0 00-.167-2.88 5.063 5.063 0 01-.037-1.051c.093.339.154.686.182 1.036.102.67.203 1.642.29 2.88a56.332 56.332 0 01-.109 9.447 35.417 35.417 0 01-2.011 9.23 18.01 18.01 0 01-1.234 2.599 5.907 5.907 0 01-.588.836zM111.846 80.148c-.041.35-.117.695-.225 1.03-.095.324-.196.72-.291 1.195-.094.475-.239.994-.327 1.591a34.837 34.837 0 00-.508 4.198 36.709 36.709 0 00.073 5.17c.162 1.716.443 3.42.842 5.097.333 1.373.75 2.724 1.249 4.047.196.568.421 1.065.602 1.512.182.446.356.82.501 1.123.166.311.302.636.407.972a5.68 5.68 0 01-.537-.907 11.86 11.86 0 01-.559-1.109c-.204-.432-.451-.929-.661-1.498a30.752 30.752 0 01-1.336-4.053 34.638 34.638 0 01-.886-5.156 34.07 34.07 0 01-.043-5.22c.101-1.42.3-2.832.595-4.226.109-.598.261-1.123.385-1.591.123-.468.239-.864.348-1.188.097-.338.22-.668.371-.987zM115.142 146.741l.276.079.813.274 3.092 1.08 2.237.792c.82.274 1.727.533 2.693.828 1.938.569 4.124 1.31 6.607 1.886l3.869.987c1.351.338 2.773.59 4.24.907 2.904.662 6.091 1.116 9.438 1.649a169.889 169.889 0 0021.838 1.548c7.306-.043 14.601-.56 21.838-1.548 3.325-.533 6.491-.979 9.438-1.649 1.452-.31 2.904-.562 4.24-.9l3.877-.986c2.476-.576 4.661-1.318 6.599-1.887.966-.295 1.873-.554 2.694-.828l2.236-.792 3.092-1.08.814-.273c.091-.036.186-.063.283-.08l-.269.116-.798.309-3.071 1.145-2.287.85c-.813.28-1.721.547-2.687.856-1.938.591-4.116 1.347-6.599 1.944l-3.877 1.008c-1.343.346-2.773.605-4.24.929-2.904.677-6.098 1.138-9.438 1.685a165.568 165.568 0 01-21.888 1.577 166.326 166.326 0 01-21.882-1.584c-3.332-.54-6.534-1.008-9.438-1.685-1.452-.324-2.904-.583-4.24-.929l-3.877-1.008c-2.483-.597-4.661-1.353-6.599-1.944-.966-.309-1.866-.576-2.686-.857l-2.229-.828-3.071-1.144-.799-.31a1.45 1.45 0 01-.239-.137z"
          fill="#fff"
        />
        <Path
          d="M115.389 146.82s6.308-12.96 55.038-13.528c48.729-.569 55.038 13.528 55.038 13.528s-49.18 24.041-110.076 0z"
          fill="#000"
          opacity={0.3}
        />
        <Path
          d="M159.798 44.998a.896.896 0 01-.167 0l-.486.05c-.436.044-1.075.058-1.895.152-2.315.222-4.612.6-6.876 1.13-11.707 2.659-22.033 9.464-29.04 19.138a50.382 50.382 0 00-7.579 15.336c-.254.777-.392 1.396-.515 1.807l-.138.475a.743.743 0 01-.058.158.46.46 0 010-.165c0-.13.058-.288.101-.483.102-.417.211-1.044.443-1.836a45.499 45.499 0 012.323-6.544 49.263 49.263 0 0113.794-18.18 49.807 49.807 0 0120.611-9.965 46.084 46.084 0 016.919-1.015c.828-.072 1.452-.065 1.902-.087h.494c.116.015.167.022.167.029zM114.227 100.424a5.537 5.537 0 01-.668-1.44 20.393 20.393 0 01-1.183-7.503c-.021-.53.043-1.06.188-1.57.117 0-.043 2.405.421 5.314.465 2.909 1.351 5.155 1.242 5.199zM102.008 96.701s-.167-.115-.392-.389a6.572 6.572 0 01-.82-1.26 8.137 8.137 0 011.241-9.288 6.428 6.428 0 011.126-1.008c.142-.118.304-.21.479-.273.043.057-.61.497-1.401 1.44a8.436 8.436 0 00-1.205 9c.508 1.145 1.023 1.735.972 1.778zM168.387 21.857a9.753 9.753 0 00-1.707-.036 4.477 4.477 0 00-1.913.62 4.427 4.427 0 00-1.442 1.392 4.386 4.386 0 00-.449 3.863c.196.527.439 1.036.726 1.52 0 0-.145-.087-.348-.317a3.89 3.89 0 01-.654-1.116 4.488 4.488 0 01.386-4.155 4.54 4.54 0 011.57-1.48 4.584 4.584 0 012.081-.593c.435-.03.871.011 1.292.122.327.05.458.159.458.18zM231.665 87.968c-.08.086-1.205-.987-2.904-1.793-1.699-.807-3.246-1.044-3.231-1.16a6.718 6.718 0 013.39.821 6.569 6.569 0 012.745 2.132zM132.087 214.018a.862.862 0 01-.088-.137l-.239-.425c-.218-.41-.508-.957-.886-1.656-.189-.36-.392-.763-.624-1.195l-.683-1.44a61.741 61.741 0 01-1.59-3.6c-.276-.669-.566-1.375-.871-2.102-.305-.727-.566-1.519-.864-2.319-.624-1.591-1.154-3.34-1.771-5.155a161 161 0 01-3.238-12.06c-.98-4.32-1.692-8.489-2.273-12.283-.58-3.794-.958-7.2-1.19-10.123-.138-1.44-.225-2.751-.298-3.903-.072-1.152-.138-2.16-.16-2.952a90.613 90.613 0 00-.065-1.864v-.483a.57.57 0 010-.165.57.57 0 010 .165l.044.483c0 .453.08 1.08.13 1.857.051.778.124 1.8.225 2.945.102 1.145.196 2.455.356 3.895.261 2.88.726 6.307 1.271 10.08.544 3.773 1.335 7.92 2.294 12.24.958 4.32 2.083 8.381 3.194 12.046.617 1.814 1.133 3.557 1.743 5.148.29.806.566 1.577.842 2.318l.842 2.117a70.041 70.041 0 001.539 3.6l.653 1.44c.211.439.414.842.596 1.21l.813 1.684.203.44a.566.566 0 01.095.194zM103.678 155.316a36.457 36.457 0 01-5.307-.187 37.993 37.993 0 01-5.278-.554 36.458 36.458 0 015.307.187c1.77.061 3.534.246 5.278.554zM76.366 139.944a38.889 38.889 0 01-2.766-4.658 38.779 38.779 0 01-2.425-4.838 39.175 39.175 0 012.759 4.665 37.904 37.904 0 012.432 4.831zM157.86 236.72a4.338 4.338 0 01-.85-.101 19.215 19.215 0 01-2.272-.547 24.764 24.764 0 01-3.238-1.232 27.66 27.66 0 01-3.674-2.116 26.817 26.817 0 01-3.252-2.715 23.67 23.67 0 01-2.265-2.606 16.843 16.843 0 01-1.285-1.937 3.712 3.712 0 01-.385-.756c.058-.036.668 1.008 1.88 2.534a26.553 26.553 0 009.133 7.287c1.028.492 2.085.923 3.166 1.289 1.858.619 3.056.828 3.042.9zM168.996 203.412a3.598 3.598 0 01-.508.051c-.483.04-.967.055-1.452.043a19.634 19.634 0 01-5.321-.857 23.497 23.497 0 01-3.471-1.382 22.69 22.69 0 01-3.63-2.311 19.393 19.393 0 01-6.011-7.638 19.216 19.216 0 01-1.525-9.57c.119-1.418.374-2.821.763-4.191a21.647 21.647 0 011.343-3.456 19.14 19.14 0 013.005-4.442c.324-.365.668-.711 1.031-1.037.121-.119.249-.23.385-.331 0 0-.479.511-1.307 1.44a20.242 20.242 0 00-2.904 4.464 20.718 20.718 0 00-2.003 7.553 19.064 19.064 0 001.523 9.394 19.233 19.233 0 005.882 7.518 22.164 22.164 0 006.933 3.744c1.7.547 3.465.869 5.249.958 1.314.05 2.018.007 2.018.05zM81.1 146.712c0 .058-.56-.208-1.452-.417a8.16 8.16 0 00-6.868 1.634c-.726.598-1.075 1.073-1.126 1.037.2-.476.508-.9.9-1.238a7.52 7.52 0 013.334-1.757 7.575 7.575 0 013.774.072 3.49 3.49 0 011.438.669zM188.308 75.123c0 .1-8.915.187-19.907.187s-19.914-.086-19.914-.187 8.915-.187 19.914-.187c10.999 0 19.907.072 19.907.187zM154.331 120.144a1.35 1.35 0 01-.334.051l-.973.086a25.1 25.1 0 01-1.539.079c-.602.015-1.285.044-2.04 0-1.517 0-3.318-.108-5.314-.316a59.383 59.383 0 01-6.425-1.102 58.423 58.423 0 01-6.244-1.858 51.742 51.742 0 01-4.893-2.066c-.726-.317-1.285-.648-1.815-.929s-.98-.533-1.343-.72l-.835-.504a1.475 1.475 0 01-.276-.194s.116 0 .312.129l.871.44c.371.201.828.439 1.365.72.538.28 1.147.568 1.837.871a59.455 59.455 0 004.901 1.98 57.658 57.658 0 0012.588 2.937c1.975.231 3.768.36 5.271.396.726.044 1.452 0 2.04 0h2.505c.113-.018.228-.018.341 0zM212.288 152.588a.666.666 0 01-.174.079l-.523.194-2.018.72c-.879.317-1.953.684-3.224 1.051-1.27.368-2.701.843-4.32 1.246l-2.526.662c-.879.224-1.808.411-2.759.634-1.902.454-3.964.814-6.127 1.224a129.862 129.862 0 01-28.554 1.735c-2.178-.137-4.291-.245-6.236-.468-.973-.101-1.917-.173-2.817-.295l-2.592-.353c-1.655-.194-3.136-.489-4.436-.72a69.374 69.374 0 01-3.332-.655l-2.091-.461-.545-.129a.672.672 0 01-.181-.058c.065-.005.131-.005.196 0l.544.094 2.106.396c.915.18 2.033.388 3.339.583 1.307.194 2.781.475 4.436.655l2.585.324c.9.115 1.844.18 2.817.274 1.938.208 4.029.302 6.222.432 4.392.18 9.22.187 14.287-.108 5.068-.296 9.852-.922 14.186-1.628 2.178-.396 4.226-.72 6.128-1.18.951-.216 1.88-.396 2.759-.612l2.526-.641c1.619-.382 3.049-.828 4.32-1.188 1.27-.36 2.359-.72 3.238-.987l2.04-.648.537-.158.189-.014z"
          fill="#461066"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_50_7340">
          <Path fill="#fff" d="M0 0H363V360H0z" />
        </ClipPath>
      </Defs>
    </Svg>

            </View>

            <View style={styles.descriptionTextContainer}>
                <Text style={styles.OnBoardingDescriptionText}>We're here to improve each day for Alzheimer's patients and caregivers.</Text>
            </View>

            {/* 
            <View style={styles.pointsContainer}>
                <View style={styles.pointHighlight}></View>
                <View style={styles.point}></View>
                <View style={styles.point}></View>
                <View style={styles.point}></View>
                <View style={styles.point}></View>
            </View>


             
             <View>
                <TouchableOpacity activeOpacity={0.7} style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Sign in</Text>
                </TouchableOpacity>
            </View> */}
            

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({

  descriptionTextContainer: {
    height: 160,
    alignItems: 'center',
  },

    OnBoardingScreen1Container: {

        flex: 1,
        alignItems: 'center',
        
    },
    logo: {
        height: 100,
        width: 110,
  },
    
    primaryTextContainer: {
        paddingLeft: 20,
      paddingRight: 20,
      height: 100,
            justifyContent : 'center'

    },  
         
    OnBoardingPrimaryText: {

        color: '#461066',
        fontFamily: 'Poppins_500Medium',
        fontSize: '30',
    },

    OnBoardingPrimaryHighlitedText: {

        color: '#BA68C8',
        fontFamily: 'Poppins_500Medium',
        fontSize: '30',
        
  },
    
  imageContainer: {
    height: 500,
    justifyContent : 'center',
    },

    OnBoardingDescriptionText: {
        textAlign: 'center',
        color: '#A19797',
        fontFamily: 'Poppins_400Regular',
      fontSize: 16,
        paddingTop : 100 , 

    },

    loginButton: {
        backgroundColor: '#461066',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 180,
        paddingRight: 180,
        borderRadius: 3,
    },

    loginButtonText: {
        color: '#fff',
        fontFamily: 'Poppins_500Medium',
    },

    pointsContainer: {
        width : 150,
        flexDirection: 'row',
        justifyContent : 'space-evenly'
    },

    pointHighlight: {
        backgroundColor: '#461066',
        height : 8,
        width: 8,
        borderRadius :5,
    },
    point :{
    backgroundColor: '#BA68C8',
        height : 8,
        width: 8,
        borderRadius :5,
    } 
})

export default OnBoarding1Screen;