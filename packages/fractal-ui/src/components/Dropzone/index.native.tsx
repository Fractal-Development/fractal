import React from 'react';
import { Layer } from '../containers';
import { DropzoneProps, NativeFileInfo } from './types';
import { useAcceptedFiles } from './hooks/useAcceptedFiles';
import { UploadButton } from './UploadButton';
import { UploadedFileList } from './UploadedFileList';

export function Dropzone({ text, acceptedTypes, maxNumberFiles, maxFileSize, onChangeAcceptedFiles }: DropzoneProps): JSX.Element {
    const [acceptedFiles, setAcceptedFiles, removeFile] = useAcceptedFiles(
        acceptedTypes,
        maxFileSize,
        maxNumberFiles,
        onChangeAcceptedFiles
    );

    const handleSelectFile = (fileInfo: NativeFileInfo) => {
        setAcceptedFiles([fileInfo]);
    };

    return (
        <Layer>
            <UploadButton text={text} onSelectFile={handleSelectFile} acceptedTypes={acceptedTypes} />
            <UploadedFileList files={acceptedFiles} removeFile={removeFile} />
        </Layer>
    );
}
