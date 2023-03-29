import React, { memo, ReactElement, ReactNode } from 'react';
import { Layer } from '@fractal-software/fractal-ui';

interface NavigationBarRightProps {
    children?: ReactNode;
}

export const NavigationBarRight = memo(
    ({ children }: NavigationBarRightProps): ReactElement => (
        <Layer justifyContent='flex-end' flex={1} flexDirection='row' alignItems='center' flexBasis={0}>
            {children}
        </Layer>
    )
);

NavigationBarRight.displayName = 'NavigationBarRight';
