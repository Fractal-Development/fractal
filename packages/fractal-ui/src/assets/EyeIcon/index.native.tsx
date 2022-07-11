import React, { memo } from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';

const EyeIcon = memo(
    (props: SvgProps): JSX.Element => (
        <Svg focusable={false} viewBox='0 0 24 18' {...props}>
            <G fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}>
                <Path d='M1 9s4-8 11-8 11 8 11 8-4 8-11 8S1 9 1 9Z' />
                <Path d='M15.823 9.001A3.823 3.823 0 1 1 12 5.178a3.823 3.823 0 0 1 3.823 3.823Z' />
            </G>
        </Svg>
    )
);

EyeIcon.displayName = 'EyeIcon';

export { EyeIcon };
