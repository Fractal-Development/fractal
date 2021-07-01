import { useCallback } from 'react';
import { fileTypes } from '../../fileTypes';
import { isAcceptedFileType } from './utils/isAcceptedFileType';
export function useValidateFileType(acceptedTypes) {
    return useCallback((fileType) => {
        if (acceptedTypes) {
            if (isAcceptedFileType(acceptedTypes, fileTypes.allFiles)) {
                return true;
            }
            if (acceptedTypes.indexOf(fileType) === -1) {
                return false;
            }
        }
        return true;
    }, [acceptedTypes]);
}
//# sourceMappingURL=index.ios.js.map