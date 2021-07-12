import { DropzoneProps, FractalFile, NativeFileInfo } from '../types';
export declare function useAcceptedFiles(acceptedTypes: Array<string> | undefined, maxFileSize: number | undefined, maxNumberFiles: number | undefined, onChangeAcceptedFiles: DropzoneProps['onChangeAcceptedFiles']): [
    acceptedFiles: Array<FractalFile>,
    setAcceptedFiles: (files: FileList | Array<NativeFileInfo>) => void,
    removeFile: (fileIndex: number) => void
];
