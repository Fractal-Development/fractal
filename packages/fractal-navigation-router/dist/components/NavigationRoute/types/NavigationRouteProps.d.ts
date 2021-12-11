import { ReactNode } from 'react';
import { ScreenProps } from '../../Screen/types/ScreenProps';
export interface NavigationRouteProps extends Omit<ScreenProps, 'active' | 'activityState'> {
    path?: string;
    children?: ReactNode;
    isTabScreen?: boolean;
    isRootRoute?: boolean;
    onDismissed?: () => void;
}
