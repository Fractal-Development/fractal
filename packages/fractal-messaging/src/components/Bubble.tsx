import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Layer, TouchableOpacity, useTheme } from '@fractal/fractal-ui';
import { BubbleProps, BubbleTriangleProps } from './types';

const BubbleTriangleLeft = styled(Layer)`
    position: absolute;
    left: 0;
    border-color: transparent;
    border-top-color: ${(props: BubbleTriangleProps) => props.color};
    border-top-width: 12px;
    border-left-width: 8px;
    border-left-color: transparent;
    background-color: transparent;
    border-style: solid;
`;

const BubbleTriangleRight = styled(Layer)`
    position: absolute;
    right: 0;
    border-color: transparent;
    border-top-color: ${(props: BubbleTriangleProps) => props.color};
    border-top-width: 12px;
    border-right-width: 8px;
    border-right-color: transparent;
    background-color: transparent;
    border-style: solid;
`;

const Bubble = forwardRef(({ children, arrowPosition, color, onPress, onLongPress, ...others }: BubbleProps, ref: any): JSX.Element => {
    const { shadows, spacings, borderRadius } = useTheme();

    return (
        <Layer ref={ref} maxWidth='75%' alignSelf={arrowPosition === 'left' ? 'flex-start' : 'flex-end'} {...others}>
            <TouchableOpacity
                position='relative'
                paddingLeft={arrowPosition === 'left' ? 6 : 0}
                paddingRight={arrowPosition === 'right' ? 6 : 0}
                flexDirection='row'
                onLongPress={onLongPress}
                onPress={onPress}
            >
                <Layer
                    padding={spacings.m}
                    backgroundColor={color}
                    borderRadius={borderRadius.m}
                    borderTopLeftRadius={arrowPosition === 'left' ? 0 : borderRadius.m}
                    borderTopRightRadius={arrowPosition === 'right' ? 0 : borderRadius.m}
                    boxShadow={shadows.mainShadow}
                    width='100%'
                >
                    {children}
                </Layer>
                {arrowPosition === 'left' ? <BubbleTriangleLeft color={color} /> : <BubbleTriangleRight color={color} />}
            </TouchableOpacity>
        </Layer>
    );
});

Bubble.displayName = 'Bubble';

export { Bubble };
