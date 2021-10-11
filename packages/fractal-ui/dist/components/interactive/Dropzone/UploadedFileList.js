import React, { Fragment, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Layer } from '../../layout';
import { UploadedFileItem } from './UploadedFileItem';
export function UploadedFileList({ files, removeFile }) {
    const renderItem = useCallback((file, index) => (React.createElement(Fragment, { key: `${index}` },
        React.createElement(UploadedFileItem, { file: file, onDeletePress: () => removeFile(index) }))), [removeFile]);
    return (React.createElement(Layer, null,
        React.createElement(AnimatePresence, null, files.map(renderItem))));
}
//# sourceMappingURL=UploadedFileList.js.map