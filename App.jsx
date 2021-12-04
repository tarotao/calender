import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase';

import LoginScreen from './src/screens/LoginScreen';
import PickerScreen from './src/screens/PickerScreen';
import SignupScreen from './src/screens/SignupScreen';

const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: 'AIzaSyCPtkwDt8cj3Z9f660y-XKQL1wE10ABz0c',
  authDomain: 'calenderalerm.firebaseapp.com',
  projectId: 'calenderalerm',
  storageBucket: 'calenderalerm.appspot.com',
  messagingSenderId: '603052967428',
  appId: '1:603052967428:web:838b1649041aa72df69751',
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="pick"
        screenOptions={{
          headerStyle: { backgroundColor: '#C6C02F' },
          headerTitleStyle: { color: '#ffffff' },
          headerTitle: 'calenderAlerm',
          headerTintColor: '#ffffff',
          headerBackTitle: 'Back',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen name="pick" component={PickerScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
