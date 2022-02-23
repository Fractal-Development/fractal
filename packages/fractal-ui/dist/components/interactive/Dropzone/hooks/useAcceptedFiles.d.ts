import { DropzoneProps, FractalFile, NativeFileInfo } from '../types';
export declare function useAcceptedFiles(maxFileSize: number | undefined, maxNumberFiles: number | undefined, onChangeAcceptedFiles: DropzoneProps['onChangeAcceptedFiles']): [
    acceptedFiles: Array<FractalFile>,
    setAcceptedFiles: (files: FileList | Array<NativeFileInfo>) => void,
    removeFile: (fileIndex: number) => void
];
