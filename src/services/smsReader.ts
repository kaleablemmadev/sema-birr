import RNAndroidNotificationListener, {RNAndroidNotificationListenerHeadlessJsName} from 'react-native-android-notification-listener';

async function checkNotificationPermission() {
    const status = await RNAndroidNotificationListener.getPermissionStatus();

    if (status !== "authorized") {
        RNAndroidNotificationListener.requestPermission();
    }
}