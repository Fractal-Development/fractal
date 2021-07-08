import { AnimatePresenceProps, Transition } from 'framer-motion';
import { LayerProps } from '../components';
import { FractalSharedAnimationProps } from './FractalSharedAnimationProps';

export type FractalVariants = {
    [key: string]: FractalSharedAnimationProps;
};

type VariantLabel = string;

export interface AnimationProps extends Omit<AnimatePresenceProps, 'initial'> {
    from?: FractalSharedAnimationProps | boolean;
    animate?: FractalSharedAnimationProps;
    exit?: FractalSharedAnimationProps | boolean;
    transition?: Transition;
    variants?: FractalVariants;
    currentVariant?: VariantLabel;
}

export interface WebAnimationProps extends Omit<LayerProps, 'animate'> {
    animate?: FractalSharedAnimationProps | string;
    initial?: FractalSharedAnimationProps | string | boolean;
}
