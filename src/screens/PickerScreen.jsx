import React, { useState, useEffect } from 'react';
import {
  View,
  Button,
  Vibration,
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

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  // ＠＠現在の日時を取得及びアラーム関数
  const originDate = new Date();
  /* eslint-disable-next-line */
  const formatDate = require('date-fns/format');
  const currentDate = formatDate(originDate, 'yyyy年MM月dd日');
  /* eslint-disable-next-line */
  const formatTime = require('date-fns/format');
  const currentTime = formatTime(originDate, 'HH時mm分');
  const Alarm = () => {
    if (date === currentDate && time === currentTime) {
      Vibration.vibrate(PATTERN, true);
      console.warn('成功');
    } else {
      console.warn('失敗');
    }
  };

  // @@@Dateピッカーの設定
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleDateConfirm = (selectedDate) => {
    /* eslint-disable-next-line */
    const formatDate = require('date-fns/format');
    const submitDate = formatDate(selectedDate, 'yyyy年MM月dd日');
    setDate(submitDate);
    console.warn(submitDate);
    hideDatePicker();
  };

  // @@@Timeピッカーの設定
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };
  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };
  const handleTimeConfirm = (selectedTime) => {
    /* eslint-disable-next-line */
    const formatTime = require('date-fns/format');
    const submitTime = formatTime(selectedTime, 'HH時mm分');
    setTime(submitTime);
    console.warn(submitTime);
    hideTimePicker();
  };

  // 振動の設定
  const ONE_SECOND_IN_MS = 1000;
  const PATTERN = [1 * ONE_SECOND_IN_MS, 1 * ONE_SECOND_IN_MS, 1 * ONE_SECOND_IN_MS];

  return (
    <View>
      <Button
        title="戻る"
        onPress={() => { navigation.navigate('login'); }}
      />
      <View>
        <Button title="日付を選択" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={hideDatePicker}
          confirmTextIOS="決定"
          cancelTextIOS="戻る"
          display="inline"
          locale="ja-JA"
        />
      </View>
      <View>
        <Button title="時間を選択" onPress={showTimePicker} />
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleTimeConfirm}
          onCancel={hideTimePicker}
          confirmTextIOS="決定"
          cancelTextIOS="戻る"
        />
      </View>
      <Button
        title="振動するよ"
        onPress={() => {
          Vibration.vibrate(PATTERN, true);
        }}
      />
      <Button
        title="止めるよ"
        onPress={() => {
          Vibration.cancel();
        }}
      />
      <Button
        title="アラーム発動"
        onPress={Alarm}
      />
    </View>
  );
}
