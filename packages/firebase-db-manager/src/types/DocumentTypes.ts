import { Timestamp } from './Timestamp';
import { GeoPoint } from './GeoPoint';
import { FirebaseReference } from './FirebaseReference';

// eslint-disable-next-line
export type PropertyTypes = string | number | boolean | Array<any> | Timestamp | GeoPoint | FirebaseReference | null;

export interface DocumentData {
    [key: string]: PropertyTypes | DocumentData;
}
