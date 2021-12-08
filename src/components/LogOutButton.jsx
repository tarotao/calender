import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';

export default function LogOutButton() {
  const navigation = useNavigation();

  const handlePress = () => {
    firebase.auth().signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'login' }],
        });
      })
      .catch(() => {
        console.log('ログアウトに失敗しました');
      });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text style={styles.label}>ログアウト</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  label: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, .7)',
  },
});
