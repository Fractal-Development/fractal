import { ImageSourcePropType } from '@fractal-software/fractal-ui';

export interface ImageModalViewerProps {
    images: ImageSourcePropType[];
    keyExtractor?: (imageSrc: ImageSourcePropType, index: number) => string;
    imageIndex: number;
    visible: boolean;
    onRequestClose: () => void;
    onLongPress?: (image: ImageSourcePropType) => void;
    onImageIndexChange?: (imageIndex: number) => void;
    backgroundColor?: string;
    swipeToCloseEnabled?: boolean;
    doubleTapToZoomEnabled?: boolean;
    delayLongPress?: number;
    header?: (props: { imageIndex: number }) => JSX.Element;
    footer?: (props: { imageIndex: number }) => JSX.Element;
}
