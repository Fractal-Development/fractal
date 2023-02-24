import React from 'react';
import { Layer, LayerProps, useTheme } from '@fractal/fractal-ui';

export function ChatFooterContainer(props: LayerProps) {
    const { sizes, spacings } = useTheme();
    return (
        <Layer
            minHeight={sizes.textFieldHeight}
            justifyContent='flex-end'
            marginRight={spacings.m}
            marginLeft={spacings.m}
            marginBottom={spacings.m}
            {...props}
        />
    );
}
