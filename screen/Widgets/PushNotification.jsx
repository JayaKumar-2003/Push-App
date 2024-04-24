import PushNotification from 'react-native-push-notification'

const LocalNotification = (setPin) => {
    const key = Date.now().toString(); 
    const randomNumber = Math.floor(100000 + Math.random() * 900000);// Key must be unique everytime
    setPin(randomNumber)
    PushNotification.createChannel(
        {
            channelId: key, // (required)
            channelName: "Local messasge", // (required)
            channelDescription: "Notification for Local message", // (optional) default: undefined.
            importance: 4, // (optional) default: 4. Int value of the Android notification importance
            vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
        },
        (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
    PushNotification.localNotification({
        channelId: key, //this must be same with channelid in createchannel
        title: 'Push App',
        message: `Generated Pin: ${randomNumber} `,
    })
};

export default LocalNotification