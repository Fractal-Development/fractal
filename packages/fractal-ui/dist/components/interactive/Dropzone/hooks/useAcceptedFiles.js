import { useCallback, useState } from 'react';
import { useValidateFile } from './useValidateFile';
export function useAcceptedFiles(acceptedTypes, maxFileSize, maxNumberFiles, onChangeAcceptedFiles) {
    const [acceptedFiles, setAcceptedFiles] = useState([]);
    const validateFile = useValidateFile(acceptedTypes, maxFileSize);
    const updateAcceptedFiles = useCallback((newFiles) => {
        setAcceptedFiles(newFiles);
        onChangeAcceptedFiles(newFiles);
    }, [onChangeAcceptedFiles]);
    const getValidFiles = useCallback((files, endIndex) => {
        let validFiles = [];
        for (let i = 0; i < endIndex; i++) {
            if (validateFile(files[i].type, files[i].size)) {
                validFiles = [...validFiles, files[i]];
            }
        }
        return validFiles;
    }, [validateFile]);
    const getAcceptedFiles = useCallback((files) => {
        if (maxNumberFiles) {
            if (acceptedFiles.length < maxNumberFiles) {
                const filesLength = maxNumberFiles - acceptedFiles.length;
                return getValidFiles(files, filesLength);
            }
            else {
                return [];
            }
        }
        return getValidFiles(files, files.length);
    }, [acceptedFiles.length, getValidFiles, maxNumberFiles]);
    const addAcceptedFiles = useCallback((newSelectedFiles) => {
        const newAddedFiles = getAcceptedFiles(newSelectedFiles);
        if (newAddedFiles.length > 0) {
            const newAcceptedFiles = [...acceptedFiles, ...newAddedFiles];
            updateAcceptedFiles(newAcceptedFiles);
        }
    }, [acceptedFiles, getAcceptedFiles, updateAcceptedFiles]);
    const removeFile = (fileIndex) => {
        acceptedFiles.splice(fileIndex, 1);
        updateAcceptedFiles([...acceptedFiles]);
    };
    return [acceptedFiles, addAcceptedFiles, removeFile];
}
//# sourceMappingURL=useAcceptedFiles.js.map