import { useCallback, useState } from 'react';
import { DropzoneProps, FractalFile, NativeFileInfo } from '../types';
import { useValidateFile } from './useValidateFile';

export function useAcceptedFiles(
    acceptedTypes: Array<string> | undefined,
    maxFileSize: number | undefined,
    maxNumberFiles: number | undefined,
    onChangeAcceptedFiles: DropzoneProps['onChangeAcceptedFiles']
): [
    acceptedFiles: Array<FractalFile>,
    setAcceptedFiles: (files: FileList | Array<NativeFileInfo>) => void,
    removeFile: (fileIndex: number) => void
] {
    const [acceptedFiles, setAcceptedFiles] = useState<Array<FractalFile>>([]);
    const validateFile = useValidateFile(acceptedTypes, maxFileSize);

    const updateAcceptedFiles = useCallback(
        (newFiles: Array<FractalFile>) => {
            setAcceptedFiles(newFiles);
            onChangeAcceptedFiles(newFiles);
        },
        [onChangeAcceptedFiles]
    );

    const getValidFiles = useCallback(
        (files: FileList | Array<NativeFileInfo>, endIndex: number): Array<FractalFile> => {
            let validFiles: Array<FractalFile> = [];
            for (let i = 0; i < endIndex; i++) {
                if (validateFile(files[i].type, files[i].size)) {
                    validFiles = [...validFiles, files[i]];
                }
            }
            return validFiles;
        },
        [validateFile]
    );

    const getAcceptedFiles = useCallback(
        (files: FileList | Array<NativeFileInfo>): Array<FractalFile> => {
            if (maxNumberFiles) {
                if (acceptedFiles.length < maxNumberFiles) {
                    const filesLength = maxNumberFiles - acceptedFiles.length;
                    return getValidFiles(files, filesLength);
                } else {
                    return [];
                }
            }

            return getValidFiles(files, files.length);
        },
        [acceptedFiles.length, getValidFiles, maxNumberFiles]
    );

    const addAcceptedFiles = useCallback(
        (newSelectedFiles: FileList | Array<NativeFileInfo>) => {
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
