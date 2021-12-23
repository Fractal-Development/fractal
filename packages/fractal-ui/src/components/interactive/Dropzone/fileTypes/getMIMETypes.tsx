import { FileTypes } from '../types';
import { fileTypes } from './index';

export function getMIMETypes(acceptedTypes: Array<keyof FileTypes> | Array<string> | undefined): Array<string> | undefined {
    if (acceptedTypes != null && acceptedTypes.length > 0) {
        if (fileTypes[acceptedTypes[0]] != null) {
            return acceptedTypes.map((fileType: keyof FileTypes) => fileTypes[fileType]);
        }
        return acceptedTypes;
    }
    return undefined;
}
