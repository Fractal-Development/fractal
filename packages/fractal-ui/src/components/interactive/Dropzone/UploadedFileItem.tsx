import React, { useEffect, useState, useCallback } from 'react';

import { FileIcon } from '../../../assets';
import { useTheme } from '../../../context';
import { HorizontalLayer, Layer } from '../../layout';
import { Image } from '../../media/Image';
import { Text } from '../../text';
import { CrossButton } from '../buttons/CrossButton';
import { FractalFile, isNativeFileInfo } from './types';

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
    const isImageFile = file.type.startsWith('image/') && file.type !== 'image/svg+xml';
    const [imageSource, setImageSource] = useState<string>();

    const formatFileSize = useCallback((size: number | undefined) => {
        if (size === 0 || size == null) return '0 Bytes';
        const k = 1024;
        const sizes = ['bytes', 'kB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(size) / Math.log(k));
        return `${parseFloat((size / k ** i).toFixed(2))} ${sizes[i]}`;
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
        <Layer from={variants.initial} animate={variants.animate} exit={variants.exit}>
            <Layer height={SEPARATOR_SIZE} />
            <HorizontalLayer height={PREVIEW_SIZE} alignItems='center' width='100%'>
                {isImageFile ? (
                    <Image width={PREVIEW_SIZE} height={PREVIEW_SIZE} source={imageSource as string} />
                ) : (
                    <FileIcon width={PREVIEW_SIZE} height={PREVIEW_SIZE} fill={colors.text} />
                )}
                <HorizontalLayer
                    flex={1}
                    justifyContent='space-between'
                    marginLeft={spacings.xs}
                    marginRight={spacings.xs}
                    alignItems='center'
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
