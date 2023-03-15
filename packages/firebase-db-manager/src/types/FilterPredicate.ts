import { PropertyTypes } from './DocumentTypes';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export interface FilterPredicate {
    property: string;
    direction: FirebaseFirestoreTypes.WhereFilterOp;
    value: PropertyTypes;
}
