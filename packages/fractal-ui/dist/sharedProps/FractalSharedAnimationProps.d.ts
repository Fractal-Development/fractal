import { FractalSharedStyleProps } from './FractalSharedStyleProps';
export interface FractalSharedAnimationProps extends FractalSharedStyleProps {
    scale?: number;
    rotate?: number;
    translateX?: number | string;
    translateY?: number | string;
}
