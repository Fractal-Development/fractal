import React, { Fragment } from 'react';
import { YAxisContentProps } from './types';

export function YAxisContent({ width, height, ticks, textProps, formatLabel, y, color }: YAxisContentProps): JSX.Element {
    return (
        <Fragment>
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
                            height > 0 &&
                                ticks.map((value, index) => {
                                    return (
                                        <text
                                            vertOriginY={y(value)}
                                            textAnchor={'middle'}
                                            x={'50%'}
                                            alignmentBaseline={'middle'}
                                            fill={color}
                                            fontFamily={'system-ui'}
                                            {...textProps}
                                            key={y(value)}
                                            y={y(value)}
                                        >
                                            {formatLabel(value, index)}
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
