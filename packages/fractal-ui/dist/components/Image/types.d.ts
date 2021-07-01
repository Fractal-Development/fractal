import { LayerProps } from '../containers/Layer/types';
declare type ImageRequireSource = number;
declare type ImageSourcePropType = ImageRequireSource | string;
export declare type ResizeModeType = 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
export interface ResizeModeProps {
    source: ImageSourcePropType;
    resizeMode?: ResizeModeType;
    backgroundSize?: string;
}
export interface ImageProps extends Omit<LayerProps, 'children'>, Omit<ResizeModeProps, 'backgroundSize'> {
    label?: string;
}
export {};
