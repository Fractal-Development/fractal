import { AnimationProps, FractalSharedStyleProps } from '../../../sharedProps';
export interface ActionButtonProps extends FractalSharedStyleProps, AnimationProps {
    onPress?: () => void;
    size?: number;
}
