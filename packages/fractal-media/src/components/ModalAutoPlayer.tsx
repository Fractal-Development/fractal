import React from 'react';
import { Modal, Layer } from '@fractal/fractal-ui';
import { AutoPlayer } from './AutoPlayer';
import { ImageDefaultHeader } from './ImageModalViewer/ImageDefaultHeader';
import { useSizeValue, useValueForLargeSizeType } from '@fractal/size-class';

interface ModalAutoPlayerProps {
    visible?: boolean;
    source: number | string;
    onRequestClose?: () => void;
}

const HEADER_HEIGHT = 44;

export function ModalAutoPlayer({ visible, source, onRequestClose }: ModalAutoPlayerProps): JSX.Element {
    const width = useSizeValue('width');
    const height = useSizeValue('height');
    const validHeight = useValueForLargeSizeType('width', height - HEADER_HEIGHT, 400);
    return (
        <Modal visible={visible} onDismiss={onRequestClose} backgroundColor='#000'>
            <ImageDefaultHeader onRequestClose={onRequestClose} />
            <Layer flex={1} justifyContent='center'>
                <AutoPlayer source={source} width={width} height={validHeight} />
            </Layer>
        </Modal>
    );
}
