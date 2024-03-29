import React from 'react';

import { Layer } from '../../layout';
import { DropBox } from './DropBox';
import { UploadedFileList } from './UploadedFileList';
import { getDropzoneAccessibilityProps } from './accessibility/getDropzoneAccessibilityProps';
import { useDropzone } from './hooks/useDropzone';
import { DropzoneProps } from './types';

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
