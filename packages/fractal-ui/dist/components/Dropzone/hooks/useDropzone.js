import { useRef, useCallback } from 'react';
import { useAcceptedFiles } from './useAcceptedFiles';
import { useDragAndDropEventHandlers } from './useDragAndDropEventHandlers';
/**
 * custom hook for create and manage a Dropzone
 *
 * @param acceptedTypes array with accepted file types
 * @param pickMultipleFiles enabled multiple selection in file dialog
 * @param maxNumberFiles maximum accepted number of files.
 * @param maxFileSize 	maximum file size (in bytes).
 * @param onChangeAcceptedFiles callback fired when the accepted files changes
 */
export function useDropzone(acceptedTypes, pickMultipleFiles, maxNumberFiles, maxFileSize, onChangeAcceptedFiles) {
    const fileInputRef = useRef(null);
    const [acceptedFiles, setAcceptedFiles, removeFile] = useAcceptedFiles(acceptedTypes, maxFileSize, maxNumberFiles, onChangeAcceptedFiles);
    const { dragFocused, onDragEnter, onDragLeave, onDragOver, onDrop } = useDragAndDropEventHandlers(setAcceptedFiles);
    const openFileDialog = useCallback(() => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }, []);
    const handlePickedFiles = useCallback((event) => {
        var _a;
        if ((_a = event.target.files) === null || _a === void 0 ? void 0 : _a.length) {
            setAcceptedFiles(event.target.files);
        }
    }, [setAcceptedFiles]);
    return {
        acceptedFiles,
        dragFocused,
        openFileDialog,
        removeFile,
        containerProps: {
            onDragOver,
            onDragEnter,
            onDragLeave,
            onDrop
        },
        fileInputProps: {
            ref: fileInputRef,
            accept: acceptedTypes === null || acceptedTypes === void 0 ? void 0 : acceptedTypes.join(','),
            multiple: pickMultipleFiles,
            type: 'file',
            onChange: handlePickedFiles
        }
    };
}
//# sourceMappingURL=useDropzone.js.map