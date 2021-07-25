import React, { memo, ReactNode } from 'react';
import { Layer, Text } from '@bma98/fractal-ui';
import { titleStyle } from './util/titleStyle';

interface NavigationBarCenterProps {
    children?: ReactNode;
    title?: string;
}

export const NavigationBarCenter = memo(({ children, title }: NavigationBarCenterProps): JSX.Element => {
    return (
        <Layer justifyContent='center' flex={1} flexDirection='row' alignItems='center' flexBasis={0}>
            {children ? (
                children
            ) : title ? (
                <Text fontWeight={600} fontSize={16} numberOfLines={1} style={titleStyle}>
                    {title}
                </Text>
            ) : null}
        </Layer>
    );
});
