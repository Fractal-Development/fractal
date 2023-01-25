import { Timestamp } from './Timestamp';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

export function createTimestamp(date?: Date): Timestamp {
    return date != null ? firebase.firestore.Timestamp.fromDate(date) : (firebase.firestore.Timestamp.now() as any);
}
