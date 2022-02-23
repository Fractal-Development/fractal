import { fileTypes } from './index';
export function getMIMETypes(acceptedTypes) {
    if (acceptedTypes != null && acceptedTypes.length > 0) {
        if (fileTypes[acceptedTypes[0]] != null) {
            return acceptedTypes.map((fileType) => fileTypes[fileType]);
        }
        return acceptedTypes;
    }
    return undefined;
}
//# sourceMappingURL=getMIMETypes.js.map