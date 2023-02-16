import { ImageSourcePropType } from '@fractal/fractal-ui';

export interface ImageVieweProps {
    images: ImageSourcePropType[];
    keyExtractor?: (imageSrc: ImageSourcePropType, index: number) => string;
    imageIndex: number;
    onRequestClose?: () => void;
    onLongPress?: (image: ImageSourcePropType) => void;
    onImageIndexChange?: (imageIndex: number) => void;
    backgroundColor?: string;
    swipeToCloseEnabled?: boolean;
    doubleTapToZoomEnabled?: boolean;
    delayLongPress?: number;
    header?: (props: { imageIndex: number }) => JSX.Element;
    footer?: (props: { imageIndex: number }) => JSX.Element;
}
