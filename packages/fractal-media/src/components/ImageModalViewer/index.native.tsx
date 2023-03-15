import React from 'react';
import { Modal } from 'react-native';
import { ImageViewer } from '../ImageViewer';
import { ImageDefaultHeader } from './ImageDefaultHeader';
import { ImageModalViewerProps } from './ImageModalViewerProps';

export function ImageModalViewer({
    images,
    keyExtractor,
    imageIndex,
    visible,
    onRequestClose,
    onLongPress,
    onImageIndexChange,
    backgroundColor,
    swipeToCloseEnabled,
    doubleTapToZoomEnabled,
    delayLongPress,
    header,
    footer
}: ImageModalViewerProps) {
    const renderDefaultHeader = () => {
        return <ImageDefaultHeader onRequestClose={onRequestClose} />;
    };

    return (
        <Modal
            transparent
            visible={visible}
            presentationStyle='overFullScreen'
            onRequestClose={onRequestClose}
            supportedOrientations={['portrait']}
            hardwareAccelerated
        >
            <ImageViewer
                images={images}
                keyExtractor={keyExtractor}
                imageIndex={imageIndex}
                onRequestClose={onRequestClose}
                onLongPress={onLongPress}
                onImageIndexChange={onImageIndexChange}
                backgroundColor={backgroundColor}
                swipeToCloseEnabled={swipeToCloseEnabled}
                doubleTapToZoomEnabled={doubleTapToZoomEnabled}
                delayLongPress={delayLongPress}
                header={header != null ? header : renderDefaultHeader}
                footer={footer}
            />
        </Modal>
    );
}
