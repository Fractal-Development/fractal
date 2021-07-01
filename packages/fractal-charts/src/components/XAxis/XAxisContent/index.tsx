import React, { Fragment } from 'react';
import { XAxisContentProps } from './types';

export function XAxisContent({ width, height, textProps, ticks, formatLabel, x, color }: XAxisContentProps): JSX.Element {
    const renderLabelText = (text: string | number, value: number): JSX.Element => {
        const words = typeof text == 'string' ? text.split(' ') : [text];
        return (
            <>
                {words[0]}
                {words.length >= 2 && (
                    <tspan x={x(value)} dy='18' fontWeight={'normal'}>
                        {words[1]}
                    </tspan>
                )}
            </>
        );
    };
    return (
        <Fragment>
            {/*invisible text to allow for parent resizing*/}
            <div
                style={{
                    opacity: 0,
                    fontFamily: textProps?.fontFamily ?? 'system-ui',
                    fontSize: textProps?.fontSize,
                    fontWeight: textProps?.fontWeight as any
                }}
            >
                {formatLabel(ticks[0], 0)}
            </div>
            {height > 0 && width > 0 && (
                <svg
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height,
                        width
                    }}
                >
                    <g>
                        {
                            // don't render labels if width isn't measured yet,
                            // causes rendering issues
                            width > 0 &&
                                ticks.map((value, index) => {
                                    return (
                                        <text
                                            textAnchor={'middle'}
                                            vertOriginX={x(value)}
                                            alignmentBaseline={'hanging'}
                                            fontFamily={'system-ui'}
                                            fontWeight={'bold'}
                                            {...textProps}
                                            fill={color}
                                            key={index}
                                            x={x(value)}
                                        >
                                            {renderLabelText(formatLabel(value, index), value)}
                                        </text>
                                    );
                                })
                        }
                    </g>
                </svg>
            )}
        </Fragment>
    );
}
