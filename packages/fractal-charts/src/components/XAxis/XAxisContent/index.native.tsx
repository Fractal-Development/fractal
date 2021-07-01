import React, { Fragment } from 'react';
import { Text } from 'react-native';
import Svg, { G, Text as SVGText, TSpan } from 'react-native-svg';
import { XAxisContentProps } from './types';

export function XAxisContent({ width, height, textProps, ticks, formatLabel, x, color }: XAxisContentProps): JSX.Element {
    const renderLabelText = (value: number, index: number): JSX.Element => {
        const text = formatLabel(value, index);
        const words = typeof text == 'string' ? text.split(' ') : [text];
        return (
            <SVGText
                textAnchor={'middle'}
                originX={x(value)}
                alignmentBaseline={'hanging'}
                fontWeight={'bold'}
                {...textProps}
                fill={color}
                key={index}
                x={x(value)}
            >
                {words[0]}
                {words.length >= 2 && (
                    <TSpan x={x(value)} dy='10' fontWeight={'normal'}>
                        {words[1]}
                    </TSpan>
                )}
            </SVGText>
        );
    };
    return (
        <Fragment>
            {/*invisible text to allow for parent resizing*/}
            <Text
                style={{
                    opacity: 0,
                    fontSize: textProps?.fontSize,
                    fontFamily: textProps?.fontFamily,
                    fontWeight: textProps?.fontWeight as any
                }}
            >
                {formatLabel(ticks[0], 0)}
            </Text>
            {height > 0 && width > 0 && (
                <Svg
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height,
                        width
                    }}
                >
                    <G>
                        {
                            // don't render labels if width isn't measured yet,
                            // causes rendering issues
                            width > 0 && ticks.map(renderLabelText)
                        }
                    </G>
                </Svg>
            )}
        </Fragment>
    );
}
