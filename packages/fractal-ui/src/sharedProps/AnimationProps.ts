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
    backdropFilter?: string; // Web only
    '-webkit-backdrop-filter'?: string; // Web only
}

export function isAnimationContent(value: unknown): value is AnimationContent {
    const casted = value as AnimationContent;
    return (
        casted != null &&
        (casted.opacity != null ||
            casted.width != null ||
            casted.height != null ||
            casted.scale != null ||
            casted.rotate != null ||
            casted.backgroundColor != null ||
            casted.translateY != null ||
            casted.backdropFilter != null)
    );
}

export type Variants = { [key: string]: AnimationContent };

export type FractalTransition = Omit<Transition, 'type'> & {
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
