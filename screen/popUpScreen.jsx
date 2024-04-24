import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


function PopUpScreen({route,navigation}) {
  const { pin } = route.params;
  const [checkPin,setCheckPin] = useState()
  // console.log(pin)
  function onPressClick() {
      if(pin == checkPin) {
        navigation.navigate('PDFUploader');
      }
  }
    return(
        <View style={styles.container}>
            <Text style={styles.text}> Enter the pin</Text>
            <TextInput style={styles.input} placeholder="Enter the pin " placeholderTextColor="black" onChangeText={setCheckPin}></TextInput>
            <Button  onPress={onPressClick}
                title="Check Pin"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"></Button>
        </View>
    )

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
  

export default PopUpScreen;