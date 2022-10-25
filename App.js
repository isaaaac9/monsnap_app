import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import config from './config';
console.log('URL Ready:', config.URL);

import HomeScreen from './screens/HomeScreen';
import CamScreen from './screens/CamScreen';
import UplaodScreen from './screens/UploadScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6b9b',
          },
          headerTintColor: '#212121',
          headerTitleStyle: {fontWeight: 'bold'},
        }}>
        <Stack.Screen
          name="Home"
          initialRouteName="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cam"
          component={CamScreen}
          options={{title: 'Detection Image'}}
        />
        <Stack.Screen
          name="Photo"
          component={UplaodScreen}
          options={{title: 'Detection Image'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffecb3',
    alignItems: 'center',
    padding: 20,
    flexDirection: 'column',
    headerTintColor: '#fff',
  },
});
