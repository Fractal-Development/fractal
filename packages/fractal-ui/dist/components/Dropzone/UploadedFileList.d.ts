import { FractalFile } from './types';
interface UploadedFileListProps {
    files: Array<FractalFile>;
    removeFile: (fileIndex: number) => void;
}
export declare function UploadedFileList({ files, removeFile }: UploadedFileListProps): JSX.Element;
export {};
