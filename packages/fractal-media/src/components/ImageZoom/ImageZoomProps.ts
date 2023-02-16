import { ImageSourcePropType } from '@fractal/fractal-ui';

export interface ImageZoomProps {
    imageSrc: ImageSourcePropType;
    onRequestClose?: () => void;
    onZoom: (isZoomed: boolean) => void;
    onLongPress: (image: ImageSourcePropType) => void;
    delayLongPress: number;
    swipeToCloseEnabled?: boolean;
    doubleTapToZoomEnabled?: boolean;
    // only for web
    containerWidth?: number;
    containerHeight?: number;
}
