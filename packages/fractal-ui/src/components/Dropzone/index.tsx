import React from 'react';
import { Layer } from '../containers/Layer';
import { useDropzone } from './hooks/useDropzone';
import { DropzoneProps } from './types';
import { DropBox } from './DropBox';
import { UploadedFileList } from './UploadedFileList';
import { getDropzoneAccessibilityProps } from './accessibility/getDropzoneAccessibilityProps';

export function Dropzone({
    text,
    webTextButton,
    acceptedTypes,
    pickMultipleFiles,
    maxNumberFiles,
    maxFileSize,
    onChangeAcceptedFiles
}: DropzoneProps): JSX.Element {
    const { acceptedFiles, containerProps, fileInputProps, openFileDialog, removeFile, dragFocused } = useDropzone(
        acceptedTypes,
        pickMultipleFiles,
        maxNumberFiles,
        maxFileSize,
        onChangeAcceptedFiles
    );

    return (
        <Layer {...getDropzoneAccessibilityProps()}>
            <DropBox
                dropContainerProps={containerProps}
                fileInputProps={fileInputProps}
                dragFocused={dragFocused}
                onButtonPress={openFileDialog}
                text={text}
                textButton={webTextButton}
            />
            <UploadedFileList files={acceptedFiles} removeFile={removeFile} />
        </Layer>
    );
}
