import { ScreenStackProps } from '../ScreenStack';
export interface StackNavigatorProps extends Omit<ScreenStackProps, 'children'> {
    children: Array<JSX.Element> | JSX.Element;
    path?: string;
}
export declare function StackNavigator({ path, children, style, ...others }: StackNavigatorProps): JSX.Element;
