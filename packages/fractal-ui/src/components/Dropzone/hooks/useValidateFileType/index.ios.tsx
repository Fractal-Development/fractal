import { useCallback } from 'react';
import { fileTypes } from '../../fileTypes';
import { isAcceptedFileType } from './utils/isAcceptedFileType';

export function useValidateFileType(acceptedTypes: Array<string> | undefined): (fileType: string) => boolean {
    return useCallback(
        (fileType: string) => {
            if (acceptedTypes) {
                if (isAcceptedFileType(acceptedTypes, fileTypes.allFiles)) {
                    return true;
                }
                if (acceptedTypes.indexOf(fileType) === -1) {
                    return false;
                }
            }
            return true;
        },
        [acceptedTypes]
    );
}
