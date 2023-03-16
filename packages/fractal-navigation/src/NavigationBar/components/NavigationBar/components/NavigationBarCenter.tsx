import React, { memo, ReactNode } from 'react';
import { Layer, Text, useTheme } from '@fractal-software/fractal-ui';
import { titleStyle } from './util/titleStyle';

interface NavigationBarCenterProps {
    children?: ReactNode;
    title?: string;
}

export const NavigationBarCenter = memo(({ children, title }: NavigationBarCenterProps): JSX.Element => {
    const { navigationBar } = useTheme();

    return (
        <Layer justifyContent='center' flex={1} flexDirection='row' alignItems='center' flexBasis={0}>
            {children ||
                (title ? (
                    <Text {...navigationBar.title} textAlign='center' numberOfLines={1} style={titleStyle}>
                        {title}
                    </Text>
                ) : null)}
        </Layer>
    );
});

NavigationBarCenter.displayName = 'NavigationBarCenter';
