import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const CustomTextInput = ({ label, onFocusColor, placeholder, width, locked, password }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, { width }]}>
      <Text style={[styles.label, { color: isFocused ? onFocusColor : '#968A8A' }]}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          { borderBottomColor: isFocused ? onFocusColor : '#968A8A', width: '100%' },
        ]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        placeholderTextColor="#968A8A"
        editable={!locked} // Control the editability based on the 'locked' prop
        secureTextEntry={password} // Use 'secureTextEntry' prop to control password input
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
        marginBottom: 15,
      marginRight : 30,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderBottomWidth: 1,
    fontSize: 18,
    paddingVertical: 5,
  },
});

export default CustomTextInput;
