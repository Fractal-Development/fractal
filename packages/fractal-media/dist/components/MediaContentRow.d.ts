import { LayerProps, ImageProps } from '@bma98/fractal-ui';
interface MediaContentRowProps extends Omit<LayerProps, 'children'> {
    imageSource: ImageProps['source'];
    title: string;
    subtitle: string;
    addSeparator?: boolean;
    enableLoveButton?: boolean;
    isLoved?: boolean;
    checkedLoveColor?: string;
    onHeartPress?: () => void;
    showOptionsButton?: boolean;
    onOptionsPress?: () => void;
}
export declare function MediaContentRow({ imageSource, title, subtitle, addSeparator, enableLoveButton, onHeartPress, isLoved, checkedLoveColor, showOptionsButton, onOptionsPress, ...layerProps }: MediaContentRowProps): JSX.Element;
export {};
