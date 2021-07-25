import { ViewProps } from 'react-native';
interface Props extends Omit<ViewProps, 'children'> {
    children?: JSX.Element | Array<JSX.Element>;
}
export declare function NavigationBarLeftView(props: Props): JSX.Element;
export declare function NavigationBarCenterView(props: Props): JSX.Element;
export declare function NavigationBarRightView(props: Props): JSX.Element;
export {};
