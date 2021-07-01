import React from 'react';
import * as DocumentPicker from 'expo-document-picker';
import { UploadIcon } from '../../assets/UploadIcon';
import { useTheme } from '../../context';
import { Button } from '../buttons';
import { HorizontalLayer } from '../containers/HorizontalLayer';
import { Text } from '../text';
import { NativeFileInfo } from './types';

interface UploadButtonProps {
    onSelectFile: (fileInfo: NativeFileInfo) => void;
    text?: string;
    acceptedTypes?: Array<string>;
}

export function UploadButton({ onSelectFile, text = 'Seleccionar archivo', acceptedTypes }: UploadButtonProps): JSX.Element {
    const { spacings } = useTheme();

    const pickFile = async () => {
        const result = await DocumentPicker.getDocumentAsync({ type: acceptedTypes?.join(',') });
        if (result.type == 'success') {
            onSelectFile({ name: result.name, size: result.size, uri: result.uri, type: '' });
        }
    };
    return (
        <Button variant={'main'} onPress={pickFile}>
            <HorizontalLayer justifyContent={'center'} alignItems={'center'} padding={spacings.s}>
                <UploadIcon width={24} height={24} fill={'white'} />
                <Text variant={'button'} marginLeft={spacings.xs}>
                    {text}
                </Text>
            </HorizontalLayer>
        </Button>
    );
}
