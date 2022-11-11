import React, { ReactElement } from 'react';
import { MinimalExpectedDatabase, MinimalUserData } from '../types';
import { ComponentRouteProps } from '../types/ComponentRouteProps';
export interface AuthenticateProps<UserType extends MinimalUserData> {
    database: MinimalExpectedDatabase<UserType, unknown>;
    children: Array<ReactElement<ComponentRouteProps>>;
    WrapperComponent?: React.FC;
}
export declare function Authenticate<UserType extends MinimalUserData>({ database, children, WrapperComponent }: AuthenticateProps<UserType>): ReactElement;
