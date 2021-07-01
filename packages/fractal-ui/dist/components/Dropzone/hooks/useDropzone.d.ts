import { DragAndDropEventHandlers, fileInputProps, FractalFile } from '../types';
/**
 * custom hook for create and manage a Dropzone
 *
 * @param acceptedTypes array with accepted file types
 * @param pickMultipleFiles enabled multiple selection in file dialog
 * @param maxNumberFiles maximum accepted number of files.
 * @param maxFileSize 	maximum file size (in bytes).
 * @param onChangeAcceptedFiles callback fired when the accepted files changes
 */
export declare function useDropzone(acceptedTypes: Array<string> | undefined, pickMultipleFiles: boolean | undefined, maxNumberFiles: number | undefined, maxFileSize: number | undefined, onChangeAcceptedFiles: (acceptedFiles: Array<File>) => void): {
    acceptedFiles: Array<FractalFile>;
    dragFocused: boolean;
    openFileDialog: () => void;
    removeFile: (fileIndex: number) => void;
    containerProps: DragAndDropEventHandlers;
    fileInputProps: fileInputProps;
};
