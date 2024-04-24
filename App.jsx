import React, { useEffect, useState } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screen/HomeScreen';
import PopUpScreen from './screen/popUpScreen';
import messaging from '@react-native-firebase/messaging';
import { firebase } from '@react-native-firebase/messaging';
import PdfScreen from './screen/PdfScreen';
import PdfView from './screen/Widgets/pdfView';
function App() {
  // async function requestUserPermission() {
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  //   if (enabled) {
  //     console.log('Authorization status:', authStatus);
  //   }
  // }

  // const getToken = async () =>{
   
  //   const token = await messaging().getToken()
  //   console.log("Token =",token)
  // }

  // useEffect(()=>{
  //   requestUserPermission()
  //   getToken()
  // },[])
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
        <Stack.Screen name='PopUp' component={PopUpScreen}></Stack.Screen>
        <Stack.Screen name='PDFUploader' component={PdfScreen}></Stack.Screen>
        <Stack.Screen name='PdfView' component={PdfView}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: "black",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "black",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: "70%",
    borderRadius: 3,
    padding: 10,
    color: "black"
  },
});

export default App;
