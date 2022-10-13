import { useCallback, useState } from 'react';

import { DropzoneProps, FractalFile, NativeFileInfo } from '../types';
import { useValidateFile } from './useValidateFile';

export function useAcceptedFiles(
    maxFileSize: number | undefined,
    maxNumberFiles: number | undefined,
    onChangeAcceptedFiles: DropzoneProps['onChangeAcceptedFiles']
): [acceptedFiles: FractalFile[], setAcceptedFiles: (files: FileList | NativeFileInfo[]) => void, removeFile: (fileIndex: number) => void] {
    const [acceptedFiles, setAcceptedFiles] = useState<FractalFile[]>([]);
    const validateFile = useValidateFile(maxFileSize);

    const updateAcceptedFiles = useCallback(
        (newFiles: FractalFile[]) => {
            setAcceptedFiles(newFiles);
            onChangeAcceptedFiles(newFiles);
        },
        [onChangeAcceptedFiles]
    );

    const getValidFiles = useCallback(
        (files: FileList | NativeFileInfo[], endIndex: number): FractalFile[] => {
            let validFiles: FractalFile[] = [];
            for (let i = 0; i < endIndex; i++) {
                if (validateFile(files[i].size)) {
                    validFiles = [...validFiles, files[i]];
                }
            }
            return validFiles;
        },
        [validateFile]
    );

    const getAcceptedFiles = useCallback(
        (files: FileList | NativeFileInfo[]): FractalFile[] => {
            if (maxNumberFiles) {
                if (acceptedFiles.length < maxNumberFiles) {
                    const filesLength = maxNumberFiles - acceptedFiles.length;
                    return getValidFiles(files, filesLength);
                }
                return [];
            }

            return getValidFiles(files, files.length);
        },
        [acceptedFiles.length, getValidFiles, maxNumberFiles]
    );

    const addAcceptedFiles = useCallback(
        (newSelectedFiles: FileList | NativeFileInfo[]) => {
            const newAddedFiles = getAcceptedFiles(newSelectedFiles);

            if (newAddedFiles.length > 0) {
                const newAcceptedFiles = [...acceptedFiles, ...newAddedFiles];
                updateAcceptedFiles(newAcceptedFiles);
            }
        },
        [acceptedFiles, getAcceptedFiles, updateAcceptedFiles]
    );

    const removeFile = (fileIndex: number) => {
        acceptedFiles.splice(fileIndex, 1);
        updateAcceptedFiles([...acceptedFiles]);
    };

    return [acceptedFiles, addAcceptedFiles, removeFile];
}
