import React, { useState, useEffect } from 'react';
import {
  View,
  Button,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import LogOutButton from '../components/LogOutButton';

export default function PickerScreen(props) {
  const { navigation } = props;
  useEffect(() => {
    const unsubscrive = navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
    return unsubscrive;
  }, []);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [Date, setDate] = useState('');
  // const [Time, setTime] = useState('');
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    console.warn('A date has been picked: ', date);
    setDate(date);
    console.log(Date);
    hideDatePicker();
  };

  return (
    <View>
      <Button
        title="戻る"
        onPress={() => { navigation.navigate('login'); }}
      />
      <View>
        <Button title="Show Date Picker" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          display
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    </View>
  );
}
