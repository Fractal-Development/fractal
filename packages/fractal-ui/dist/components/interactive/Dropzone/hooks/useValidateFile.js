import { useCallback } from 'react';
export function useValidateFile(maxFileSize) {
    return useCallback((fileSize) => {
        if (maxFileSize && fileSize > maxFileSize) {
            return false;
        }
        return true;
    }, [maxFileSize]);
}
//# sourceMappingURL=useValidateFile.js.map