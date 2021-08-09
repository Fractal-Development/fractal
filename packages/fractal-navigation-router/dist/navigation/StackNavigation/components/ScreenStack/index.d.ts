import { ReactNode } from 'react';
import { ScreenStackProps as Props } from 'react-native-screens';
export interface ScreenStackProps extends Props {
    children: ReactNode;
}
export declare function ScreenStack(props: ScreenStackProps): JSX.Element;
