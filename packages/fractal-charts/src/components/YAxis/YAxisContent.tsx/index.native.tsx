import React, { Fragment } from 'react';
import { Text } from 'react-native';
import Svg, { G, Text as SVGText } from 'react-native-svg';
import { YAxisContentProps } from './types';

export function YAxisContent({ width, height, ticks, textProps, formatLabel, y, color }: YAxisContentProps): JSX.Element {
    return (
        <Fragment>
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
                            height > 0 &&
                                ticks.map((value, index) => {
                                    return (
                                        <SVGText
                                            originY={y(value)}
                                            textAnchor={'middle'}
                                            x={'50%'}
                                            alignmentBaseline={'middle'}
                                            fill={color}
                                            {...textProps}
                                            key={y(value)}
                                            y={y(value)}
                                        >
                                            {formatLabel(value, index)}
                                        </SVGText>
                                    );
                                })
                        }
                    </G>
                </Svg>
            )}
        </Fragment>
    );
}
