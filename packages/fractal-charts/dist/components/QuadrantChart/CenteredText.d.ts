import { TextProps } from '@bma98/fractal-ui';
interface CenteredTextProps extends TextProps {
    style?: any;
    children: string;
    width?: number;
    height?: number;
    position?: 'absolute' | 'relative';
    marginTop?: number;
}
export declare function CenteredText({ style, children, color, ...others }: CenteredTextProps): JSX.Element;
export {};
