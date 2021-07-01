import React, { useEffect, useState, useCallback } from 'react';
import { HorizontalLayer } from '../containers/HorizontalLayer';
import { Image } from '../Image';
import { useValidateFileType } from './hooks/useValidateFileType';
import { FractalFile, isNativeFileInfo } from './types';
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

export interface UploadedFileItemProps {
    file: FractalFile;
    onDeletePress: () => void;
}

export function UploadedFileItem({ file, onDeletePress }: UploadedFileItemProps): JSX.Element {
    const { spacings, colors } = useTheme();
    const validateFileType = useValidateFileType([fileTypes.images]);
    const isImageFile = validateFileType(file.type);
    const [imageSource, setImageSource] = useState<string>();

    const formatFileSize = useCallback((size: number) => {
        if (size === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['bytes', 'kB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(size) / Math.log(k));
        return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }, []);

    useEffect(() => {
        if (isNativeFileInfo(file)) {
            setImageSource(file.uri);
        } else {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = (progressEvent) => {
                if (progressEvent.target?.result) {
                    setImageSource(progressEvent.target.result as string);
                }
            };
        }
    }, [file]);

    return (
        <Layer initial={variants.initial} animate={variants.animate} exit={variants.exit}>
            <Layer height={SEPARATOR_SIZE} />
            <HorizontalLayer height={PREVIEW_SIZE} alignItems={'center'} width={'100%'}>
                {isImageFile ? (
                    <Image width={PREVIEW_SIZE} height={PREVIEW_SIZE} source={imageSource as string} />
                ) : (
                    <FileIcon width={PREVIEW_SIZE} height={PREVIEW_SIZE} fill={colors.text} />
                )}
                <HorizontalLayer
                    flex={1}
                    justifyContent={'space-between'}
                    marginLeft={spacings.xs}
                    marginRight={spacings.xs}
                    alignItems={'center'}
                >
                    <Text variant='normal' flex={1} numberOfLines={1} ellipsizeMode='tail'>
                        {file.name}
                    </Text>
                    <Text variant='label'>{formatFileSize(file.size)}</Text>
                </HorizontalLayer>
                <CrossButton onPress={onDeletePress} />
            </HorizontalLayer>
        </Layer>
    );
}
