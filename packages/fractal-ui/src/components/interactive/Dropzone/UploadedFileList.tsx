import React, { Fragment, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Layer } from '../../layout';
import { UploadedFileItem } from './UploadedFileItem';
import { FractalFile } from './types';

interface UploadedFileListProps {
    files: Array<FractalFile>;
    removeFile: (fileIndex: number) => void;
}

export function UploadedFileList({ files, removeFile }: UploadedFileListProps): JSX.Element {
    const renderItem = useCallback(
        (file: File, index: number): JSX.Element => (
            <Fragment key={`${index}`}>
                <UploadedFileItem file={file} onDeletePress={() => removeFile(index)} />
            </Fragment>
        ),
        [removeFile]
    );

    return (
        <Layer>
            <AnimatePresence>{files.map(renderItem)}</AnimatePresence>
        </Layer>
    );
}
