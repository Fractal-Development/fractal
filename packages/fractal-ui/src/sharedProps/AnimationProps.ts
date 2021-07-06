import { AnimatePresenceProps, Transition } from 'framer-motion';
import { LayerProps } from '../components';
import { FractalSharedAnimationProps } from './FractalSharedAnimationProps';

export interface AnimationProps extends Omit<AnimatePresenceProps, 'initial'> {
    from?: FractalSharedAnimationProps | boolean;
    animate?: FractalSharedAnimationProps;
    exit?: FractalSharedAnimationProps | boolean;
    transition?: Transition;
}

export interface WebAnimationProps extends LayerProps {
    initial?: FractalSharedAnimationProps | boolean;
}
