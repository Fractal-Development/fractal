import React, { forwardRef } from 'react';

import { useTheme } from '../../../context';
import { LayerProps, Layer, HorizontalLayer } from '../../layout';
import { Text } from '../../text';

export interface MessageProps extends Partial<Omit<LayerProps, 'children'>> {
    title: string;
    messageType?: 'main' | 'alternative' | 'success' | 'warning' | 'danger';
    icon?: (color: string) => JSX.Element;
    description: string;
}

const Message = forwardRef(({ messageType = 'main', title, icon, description, ...others }: MessageProps, ref: any): JSX.Element => {
    const { colors, spacings, borderRadius } = useTheme();
    const backgroundColor = `${messageType}InteractiveColor100`;
    const titleVariant = `${messageType}InteractiveColor`;
    const textVariant = `${messageType}InteractiveColor`;

    return (
        <Layer ref={ref} padding={spacings.m} borderRadius={borderRadius.m} backgroundColor={colors[backgroundColor]} {...others}>
            <HorizontalLayer alignItems='center' marginBottom={spacings.xs}>
                {icon != null ? icon(colors[textVariant]) : null}
                <Text marginLeft={icon != null ? spacings.s : undefined} variant='title' color={colors[titleVariant]} flexShrink={1}>
                    {title}
                </Text>
            </HorizontalLayer>
            <Text variant='normal' color={colors[textVariant]}>
                {description}
            </Text>
        </Layer>
    );
});

Message.displayName = 'Message';

export { Message };
