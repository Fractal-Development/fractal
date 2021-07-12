import { useCallback } from 'react';
import { useValidateFileType } from './useValidateFileType';

export function useValidateFile(
    acceptedTypes: Array<string> | undefined,
    maxFileSize: number | undefined
): (fileType: string, fileSize: number) => boolean {
    const validateFileType = useValidateFileType(acceptedTypes);

    const validateFileSize = useCallback(
        (fileSize: number) => {
            if (maxFileSize && fileSize > maxFileSize) {
                return false;
            }
            return true;
        },
        [maxFileSize]
    );

    return useCallback(
        (fileType: string, fileSize: number) => {
            return validateFileType(fileType) && validateFileSize(fileSize);
        },
        [validateFileSize, validateFileType]
    );
}
