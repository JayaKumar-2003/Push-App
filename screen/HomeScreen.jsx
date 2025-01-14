import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import LocalNotification from './Widgets/PushNotification';
import { useForm, Controller } from 'react-hook-form';
function HomeScreen({ route, navigation }) {
    const { details } = route.params;
    const { control, handleSubmit, watch, formState: { errors } } = useForm();
    // console.log("hi",details)
    const name = watch("name")
    const password = watch("password")
    // const [formData,setformData] = useState();
    const onSubmit = (data) => {
        // setformData(data)
        if (details.name == data.name && details.password == data.password) {
            const pin = LocalNotification();
            navigation.navigate('PopUp', { pin: pin });
        }
    };


    return (
        <View style={styles.container}>
            <Text style={styles.text}> One View</Text>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder={'Enter your name'}
                        placeholderTextColor="black"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="name"
                rules={{ required: true }}
                defaultValue=""
            />
            {console.log(errors)}
            <Text style={styles.text}>{name}</Text>
            {errors?.name?.type == "required" && <Text style={styles.text}>First Name is required.</Text>}
            {/* {errors?.name?.type == "required" && <Text style={styles.text}>First Name is required.</Text>} */}
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder={'Enter your password'}
                        placeholderTextColor="black"
                        secureTextEntry={true}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="password"
                rules={{ required: true, minLength: 8 }}
                defaultValue=""
            />
            <Text style={styles.text}>{password}</Text>
            {errors?.password?.type === "required" && <Text style={styles.text}>Last Name is required.</Text>}

            {errors?.password?.type === "minLength" && <Text style={styles.text}>Minimum 8 characters are required</Text>}

            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
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
