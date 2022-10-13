import { FileTypes } from '.';
import { NativeFileInfo } from './FractalFile';

export interface DropzoneProps {
    text?: string;
    webTextButton?: string;
    acceptedTypes?: (keyof FileTypes)[] | string[];
    pickMultipleFiles?: boolean;
    maxNumberFiles?: number;
    maxFileSize?: number; // maximum file size (in bytes)
    onChangeAcceptedFiles: (acceptedFiles: (File | NativeFileInfo)[]) => void;
}
