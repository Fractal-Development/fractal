import React from 'react';
import * as DocumentPicker from 'expo-document-picker';
import { LoadIcon } from '../../../assets';
import { useTheme } from '../../../context';
import { Button } from '../buttons/Button';
import { HorizontalLayer } from '../../layout';
import { Text } from '../../text';
import { FileTypes, NativeFileInfo } from './types';
import { getMIMETypes } from './fileTypes/getMIMETypes';

interface UploadButtonProps {
    onSelectFile: (fileInfo: NativeFileInfo) => void;
    text?: string;
    acceptedTypes?: Array<keyof FileTypes> | Array<string>;
}

export function UploadButton({ onSelectFile, text = 'Seleccionar archivo', acceptedTypes }: UploadButtonProps): JSX.Element {
    const { spacings } = useTheme();

    const pickFile = async () => {
        const result = await DocumentPicker.getDocumentAsync({ type: getMIMETypes(acceptedTypes) });
        if (result.type === 'success') {
            onSelectFile({ name: result.name, size: result.size, uri: result.uri, type: result.mimeType ?? '' });
        }
    };
    return (
        <Button variant='main' onPress={pickFile}>
            <HorizontalLayer justifyContent='center' alignItems='center' padding={spacings.s}>
                <LoadIcon width={24} height={24} fill='white' />
                <Text variant='button' marginLeft={spacings.xs}>
                    {text}
                </Text>
            </HorizontalLayer>
        </Button>
    );
}
