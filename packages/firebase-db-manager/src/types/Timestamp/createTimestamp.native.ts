import { Timestamp } from './Timestamp';
import firestore from '@react-native-firebase/firestore';

export function createTimestamp(date?: Date): Timestamp {
    return date != null ? firestore.Timestamp.fromDate(date) : firestore.Timestamp.now();
}
