import { ScreenProps } from '../../../components/Screen/types/ScreenProps';
import { ReactNode } from 'react';
export interface NavigationRouteProps extends Omit<ScreenProps, 'active' | 'activityState'> {
    path?: string;
    children?: ReactNode;
    isTabScreen?: boolean;
    isRootRoute?: boolean;
    onDismissed?: () => void;
}
