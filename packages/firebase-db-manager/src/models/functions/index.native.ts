import nativeFunctions from '@react-native-firebase/functions';

export function functions(): ReturnType<typeof nativeFunctions> {
    return nativeFunctions();
}
