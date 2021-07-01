import React, { Fragment, useCallback } from 'react';
import { Layer } from '../containers/Layer';
import { UploadedFileItem } from './UploadedFileItem';
import { AnimatePresence } from 'framer-motion';
export function UploadedFileList({ files, removeFile }) {
    const renderItem = useCallback((file, index) => {
        return (React.createElement(Fragment, { key: `${index}` },
            React.createElement(UploadedFileItem, { file: file, onDeletePress: () => removeFile(index) })));
    }, [removeFile]);
    return (React.createElement(Layer, null,
        React.createElement(AnimatePresence, null, files.map(renderItem))));
}
//# sourceMappingURL=UploadedFileList.js.map