import { useRef, ChangeEvent, useCallback } from 'react';
import { DragAndDropEventHandlers, fileInputProps, FractalFile } from '../types';
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

export function useDropzone(
    acceptedTypes: Array<string> | undefined,
    pickMultipleFiles: boolean | undefined,
    maxNumberFiles: number | undefined,
    maxFileSize: number | undefined,
    onChangeAcceptedFiles: (acceptedFiles: Array<File>) => void
): {
    acceptedFiles: Array<FractalFile>;
    dragFocused: boolean;
    openFileDialog: () => void;
    removeFile: (fileIndex: number) => void;
    containerProps: DragAndDropEventHandlers;
    fileInputProps: fileInputProps;
} {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [acceptedFiles, setAcceptedFiles, removeFile] = useAcceptedFiles(
        acceptedTypes,
        maxFileSize,
        maxNumberFiles,
        onChangeAcceptedFiles
    );
    const { dragFocused, onDragEnter, onDragLeave, onDragOver, onDrop } = useDragAndDropEventHandlers(setAcceptedFiles);

    const openFileDialog = useCallback(() => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }, []);

    const handlePickedFiles = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            if (event.target.files?.length) {
                setAcceptedFiles(event.target.files);
            }
        },
        [setAcceptedFiles]
    );

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
            accept: acceptedTypes?.join(','),
            multiple: pickMultipleFiles,
            type: 'file',
            onChange: handlePickedFiles
        }
    };
}
