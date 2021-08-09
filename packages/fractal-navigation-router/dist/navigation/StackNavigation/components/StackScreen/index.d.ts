import { ReactElement } from 'react';
import { NavigationRouteProps } from '../../../NavigationRoute/types/NavigationRouteProps';
interface StackScreenProps extends NavigationRouteProps {
    navBarConfig?: ReactElement;
}
export declare function StackScreen({ navBarConfig, children, path, ...others }: StackScreenProps): JSX.Element;
export {};
