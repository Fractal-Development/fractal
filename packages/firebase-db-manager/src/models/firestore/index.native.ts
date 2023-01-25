import firestore from '@react-native-firebase/firestore';

export default function batch(): ReturnType<typeof firestore> {
    return firestore();
}
