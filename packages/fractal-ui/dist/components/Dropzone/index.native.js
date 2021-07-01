import React from 'react';
import { Layer } from '../containers';
import { useAcceptedFiles } from './hooks/useAcceptedFiles';
import { UploadButton } from './UploadButton';
import { UploadedFileList } from './UploadedFileList';
export function Dropzone({ text, acceptedTypes, maxNumberFiles, maxFileSize, onChangeAcceptedFiles }) {
    const [acceptedFiles, setAcceptedFiles, removeFile] = useAcceptedFiles(acceptedTypes, maxFileSize, maxNumberFiles, onChangeAcceptedFiles);
    const handleSelectFile = (fileInfo) => {
        setAcceptedFiles([fileInfo]);
    };
    return (React.createElement(Layer, null,
        React.createElement(UploadButton, { text: text, onSelectFile: handleSelectFile, acceptedTypes: acceptedTypes }),
        React.createElement(UploadedFileList, { files: acceptedFiles, removeFile: removeFile })));
}
//# sourceMappingURL=index.native.js.map