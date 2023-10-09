import React, { Component } from 'react';
import { View, Button, StyleSheet, Platform, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: new Date(),
      showDatePicker: false,
    };
  }

  showDatePicker = () => {
    this.setState({ showDatePicker: true });
  };

  hideDatePicker = () => {
    this.setState({ showDatePicker: false });
  };

  handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      this.setState({
        selectedDate,
      });
    }
  };

  confirmDate = () => {
    this.hideDatePicker();
    // Additional logic to handle the selected date
    // For example, you can call a function here to perform any necessary actions
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Open Date Picker" onPress={this.showDatePicker} />
        {this.state.showDatePicker && (
          <View>
            <DateTimePicker
              value={this.state.selectedDate}
              mode="date"
              display="inline"
              onChange={this.handleDateChange}
            />
            <Button title="Confirm" onPress={this.confirmDate} />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DatePicker;
