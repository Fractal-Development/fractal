import React from 'react';
import { Layer } from '../containers/Layer';
import { useDropzone } from './hooks/useDropzone';
import { DropBox } from './DropBox';
import { UploadedFileList } from './UploadedFileList';
import { getDropzoneAccessibilityProps } from './accessibility/getDropzoneAccessibilityProps';
export function Dropzone({ text, webTextButton, acceptedTypes, pickMultipleFiles, maxNumberFiles, maxFileSize, onChangeAcceptedFiles }) {
    const { acceptedFiles, containerProps, fileInputProps, openFileDialog, removeFile, dragFocused } = useDropzone(acceptedTypes, pickMultipleFiles, maxNumberFiles, maxFileSize, onChangeAcceptedFiles);
    return (React.createElement(Layer, Object.assign({}, getDropzoneAccessibilityProps()),
        React.createElement(DropBox, { dropContainerProps: containerProps, fileInputProps: fileInputProps, dragFocused: dragFocused, onButtonPress: openFileDialog, text: text, textButton: webTextButton }),
        React.createElement(UploadedFileList, { files: acceptedFiles, removeFile: removeFile })));
}
//# sourceMappingURL=index.js.map