import { FractalFile } from './types';
export interface UploadedFileItemProps {
    file: FractalFile;
    onDeletePress: () => void;
}
export declare function UploadedFileItem({ file, onDeletePress }: UploadedFileItemProps): JSX.Element;
