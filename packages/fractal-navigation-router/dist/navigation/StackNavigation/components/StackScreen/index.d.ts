import { NavigationRouteProps } from '../../../NavigationRoute/types/NavigationRouteProps';
import { NavigationBarProps } from '@bma98/fractal-navigation';
interface StackScreenProps extends NavigationRouteProps {
    navBarConfig?: NavigationBarProps;
}
export declare function StackScreen({ navBarConfig, children, path, ...others }: StackScreenProps): JSX.Element;
export {};
