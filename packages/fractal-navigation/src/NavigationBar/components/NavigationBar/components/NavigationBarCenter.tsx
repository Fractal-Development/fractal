import React, { memo, ReactNode } from 'react';
import { Layer } from '@fractal/fractal-ui';
import { NavigationBarTitle } from './NavigationBarTitle';
import { titleStyle } from './util/titleStyle';

interface NavigationBarCenterProps {
    children?: ReactNode;
    title?: string;
}

export const NavigationBarCenter = memo(({ children, title }: NavigationBarCenterProps): JSX.Element => {
    return (
        <Layer justifyContent='center' flex={1} flexDirection='row' alignItems='center' flexBasis={0}>
            {children || (title ? <NavigationBarTitle title={title} textAlign='center' numberOfLines={1} style={titleStyle} /> : null)}
        </Layer>
    );
});

NavigationBarCenter.displayName = 'NavigationBarCenter';
