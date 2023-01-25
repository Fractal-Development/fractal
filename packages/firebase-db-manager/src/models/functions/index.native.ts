import nativeFunctions from '@react-native-firebase/functions';

export default function functions(): ReturnType<typeof nativeFunctions> {
    return nativeFunctions();
}
