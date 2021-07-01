import React, { useEffect, useState, useCallback } from 'react';
import { HorizontalLayer } from '../containers/HorizontalLayer';
import { Image } from '../Image';
import { useValidateFileType } from './hooks/useValidateFileType';
import { isNativeFileInfo } from './types';
import { Text } from '../text';
import { useTheme } from '../../context/hooks/useTheme';
import { CrossButton } from '../buttons';
import { FileIcon } from '../../assets/FileIcon';
import { Layer } from '../containers/Layer';
import { fileTypes } from './fileTypes';
const PREVIEW_SIZE = 44;
const SEPARATOR_SIZE = 8;
const variants = {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: PREVIEW_SIZE + SEPARATOR_SIZE },
    exit: { opacity: 0, height: 0 }
};
export function UploadedFileItem({ file, onDeletePress }) {
    const { spacings, colors } = useTheme();
    const validateFileType = useValidateFileType([fileTypes.images]);
    const isImageFile = validateFileType(file.type);
    const [imageSource, setImageSource] = useState();
    const formatFileSize = useCallback((size) => {
        if (size === 0)
            return '0 Bytes';
        const k = 1024;
        const sizes = ['bytes', 'kB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(size) / Math.log(k));
        return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }, []);
    useEffect(() => {
        if (isNativeFileInfo(file)) {
            setImageSource(file.uri);
        }
        else {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = (progressEvent) => {
                var _a;
                if ((_a = progressEvent.target) === null || _a === void 0 ? void 0 : _a.result) {
                    setImageSource(progressEvent.target.result);
                }
            };
        }
    }, [file]);
    return (React.createElement(Layer, { initial: variants.initial, animate: variants.animate, exit: variants.exit },
        React.createElement(Layer, { height: SEPARATOR_SIZE }),
        React.createElement(HorizontalLayer, { height: PREVIEW_SIZE, alignItems: 'center', width: '100%' },
            isImageFile ? (React.createElement(Image, { width: PREVIEW_SIZE, height: PREVIEW_SIZE, source: imageSource })) : (React.createElement(FileIcon, { width: PREVIEW_SIZE, height: PREVIEW_SIZE, fill: colors.text })),
            React.createElement(HorizontalLayer, { flex: 1, justifyContent: 'space-between', marginLeft: spacings.xs, marginRight: spacings.xs, alignItems: 'center' },
                React.createElement(Text, { variant: 'normal', flex: 1, numberOfLines: 1, ellipsizeMode: 'tail' }, file.name),
                React.createElement(Text, { variant: 'label' }, formatFileSize(file.size))),
            React.createElement(CrossButton, { onPress: onDeletePress }))));
}
//# sourceMappingURL=UploadedFileItem.js.map