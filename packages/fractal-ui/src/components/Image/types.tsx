import { LayerProps } from '../containers/Layer/types';

type ImageRequireSource = number;

type ImageSourcePropType = ImageRequireSource | string;

export type ResizeModeType = 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';

export interface ResizeModeProps {
    source: ImageSourcePropType;
    resizeMode?: ResizeModeType;
    backgroundSize?: string;
}

export interface ImageProps extends Omit<LayerProps, 'children'>, Omit<ResizeModeProps, 'backgroundSize'> {
    label?: string;
}
