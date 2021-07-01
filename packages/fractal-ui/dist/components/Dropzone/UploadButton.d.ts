import { NativeFileInfo } from './types';
interface UploadButtonProps {
    onSelectFile: (fileInfo: NativeFileInfo) => void;
    text?: string;
    acceptedTypes?: Array<string>;
}
export declare function UploadButton({ onSelectFile, text, acceptedTypes }: UploadButtonProps): JSX.Element;
export {};
