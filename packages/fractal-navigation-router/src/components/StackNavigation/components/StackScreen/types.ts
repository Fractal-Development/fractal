import { ReactElement } from 'react';
import { NavigationRouteProps } from '../../../NavigationRoute/types';

export interface StackScreenProps extends NavigationRouteProps {
    navBarConfig?: ReactElement;
    fractalRoutesIdentifier: string;
}
