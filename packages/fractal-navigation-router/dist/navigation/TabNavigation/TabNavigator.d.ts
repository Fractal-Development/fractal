export interface TabNavigatorProps {
    children: Array<JSX.Element> | JSX.Element;
    tabBar: JSX.Element;
}
export declare function TabNavigator({ tabBar, children, ...others }: TabNavigatorProps): JSX.Element;
