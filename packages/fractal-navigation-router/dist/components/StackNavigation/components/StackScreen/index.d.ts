import { ReactElement } from 'react';
import { NavigationRouteProps } from '../../../NavigationRoute/types/NavigationRouteProps';
interface StackScreenProps extends NavigationRouteProps {
    navBarConfig?: ReactElement;
}
export declare function StackScreen({ navBarConfig, children, ...others }: StackScreenProps): ReactElement;
export {};
