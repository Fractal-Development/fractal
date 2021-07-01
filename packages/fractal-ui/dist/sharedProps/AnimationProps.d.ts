import { Transition } from 'framer-motion';
interface BasicAnimationContent {
    opacity?: number;
    width?: number;
    height?: number;
    backgroundColor?: string;
}
interface TransformAnimationContent {
    scale?: number;
    rotate?: number;
    translateY?: number;
    translateX?: number;
}
export interface AnimationContent extends TransformAnimationContent, BasicAnimationContent {
    backdropFilter?: string;
    '-webkit-backdrop-filter'?: string;
}
export declare function isAnimationContent(value: unknown): value is AnimationContent;
export declare type Variants = {
    [key: string]: AnimationContent;
};
export declare type FractalTransition = Omit<Transition, 'type'> & {
    duration?: number;
    type?: 'ease' | 'spring';
};
export interface AnimationProps {
    initial?: AnimationContent | string;
    animate?: AnimationContent | string;
    variants?: Variants;
    transition?: FractalTransition;
    exit?: AnimationContent;
}
export {};
