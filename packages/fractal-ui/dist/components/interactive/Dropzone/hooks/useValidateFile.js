import { useCallback } from 'react';
import { useValidateFileType } from './useValidateFileType';
export function useValidateFile(acceptedTypes, maxFileSize) {
    const validateFileType = useValidateFileType(acceptedTypes);
    const validateFileSize = useCallback((fileSize) => {
        if (maxFileSize && fileSize > maxFileSize) {
            return false;
        }
        return true;
    }, [maxFileSize]);
    return useCallback((fileType, fileSize) => {
        return validateFileType(fileType) && validateFileSize(fileSize);
    }, [validateFileSize, validateFileType]);
}
//# sourceMappingURL=useValidateFile.js.map