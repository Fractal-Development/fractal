import { AnimationProps } from '../../../sharedProps/AnimationProps';
import { FractalSharedProps } from '../../../sharedProps/FractalSharedProps';
export interface ActionButtonProps extends FractalSharedProps, AnimationProps {
    onPress?: () => void;
    size?: number;
}
