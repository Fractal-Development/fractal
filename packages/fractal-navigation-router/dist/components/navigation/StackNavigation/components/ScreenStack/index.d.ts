import { ReactNode } from 'react';
import { LayerProps } from '@bma98/fractal-ui';
export interface ScreenStackProps extends LayerProps {
    children?: ReactNode;
}
export declare function ScreenStack(props: ScreenStackProps): JSX.Element;
