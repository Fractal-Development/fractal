import { GeoPoint } from './GeoPoint';
import firestore from '@react-native-firebase/firestore';

export function createGeoPoint(latitude: number, longitude: number): GeoPoint {
    return new firestore.GeoPoint(latitude, longitude);
}
