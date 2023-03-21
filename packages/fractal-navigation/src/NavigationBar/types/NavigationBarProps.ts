import { LayerProps } from '@fractal/fractal-ui';

export interface NavigationBarProps extends Omit<LayerProps, 'children'> {
    leftChild?: JSX.Element;
    centerChild?: JSX.Element;
    rightChild?: JSX.Element;
    hidden?: boolean;
    showBackButton?: boolean;
    backTitle?: string;
    title?: string;
    path?: string;
    largeTitle?: boolean;
    goBack: () => void;
    backgroundColor?: string;
    disabledSafeAreaInsets?: boolean;
}
