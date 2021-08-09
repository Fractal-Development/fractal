import { ReactElement } from 'react';
import { NavigationRouteProps } from '../../../NavigationRoute/types/NavigationRouteProps';
interface StackScreenProps extends NavigationRouteProps {
    navBarConfig?: ReactElement;
}
export declare function StackScreen({ children, navBarConfig, stackPresentation, path, ...others }: StackScreenProps): JSX.Element;
export {};
