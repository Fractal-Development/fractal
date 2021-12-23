import { useCallback } from 'react';

export function useValidateFile(maxFileSize: number | undefined): (fileSize: number | undefined) => boolean {
    return useCallback(
        (fileSize: number) => {
            if (maxFileSize && fileSize > maxFileSize) {
                return false;
            }
            return true;
        },
        [maxFileSize]
    );
}
