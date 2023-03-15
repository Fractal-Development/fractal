import { LayerProps } from '@fractal/fractal-ui';

export interface NavigationBarProps extends LayerProps {
    children?: JSX.Element | Array<JSX.Element>;
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
