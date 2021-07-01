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
                if (isAcceptedFileType(acceptedTypes, fileTypes.images) && fileType.includes('image/')) {
                    return true;
                }
                if (isAcceptedFileType(acceptedTypes, fileTypes.video) && fileType.includes('video/')) {
                    return true;
                }
                if (isAcceptedFileType(acceptedTypes, fileTypes.audio) && fileType.includes('audio/')) {
                    return true;
                }
                if (acceptedTypes.indexOf(fileType) >= 0) {
                    return true;
                }
                return false;
            }
            return true;
        },
        [acceptedTypes]
    );
}
