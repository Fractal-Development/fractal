import { AuthenticateChildrenKey } from './AuthenticateChildrenKey';
import { ReactNode } from 'react';
export interface ComponentRouteProps {
    key: AuthenticateChildrenKey;
    route: string;
    children: ReactNode;
}
