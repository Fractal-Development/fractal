import nativeFirestore from '@react-native-firebase/firestore';

export function firestore(): ReturnType<typeof nativeFirestore> {
    return nativeFirestore();
}
