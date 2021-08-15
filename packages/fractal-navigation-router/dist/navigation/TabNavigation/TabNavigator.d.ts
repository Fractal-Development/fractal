export interface TabNavigatorProps {
    children: Array<JSX.Element> | JSX.Element;
    tabBar: JSX.Element;
    style: any;
}
export declare function TabNavigator({ tabBar, children, style, ...others }: TabNavigatorProps): JSX.Element;
