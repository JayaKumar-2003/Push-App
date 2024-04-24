import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import LocalNotification from './Widgets/PushNotification';

function HomeScreen({ navigation }) {
    const [name, onChangeName] = useState('');
    const [password, onChangePassword] = useState('');
    const [pin, setPin] = useState('');

    useEffect(() => {
        if (pin) {
            navigation.navigate('PopUp', { pin: pin });
        }
    }, [pin, navigation]);

    async function onPressClick() {
        if (name === 'Jai' && password === '1234') {
            console.log('correct');
            await LocalNotification(setPin);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}> Open up App.js</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeName}
                placeholder={'Enter your name'}
                placeholderTextColor="black"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                placeholder={'Enter your Password'}
                placeholderTextColor="black"
            />
            <Button
                onPress={onPressClick}
                title="Sign In"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'black',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        width: '70%',
        borderRadius: 3,
        padding: 10,
        color: 'black',
    },
});

export default HomeScreen;
