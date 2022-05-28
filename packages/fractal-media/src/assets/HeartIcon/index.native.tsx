import React, { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const HeartIcon = memo(
    (props: SvgProps): JSX.Element => (
        <Svg focusable={false} viewBox='0 0 30 30' {...props}>
            <Path d='M9.545 4A6.544 6.544 0 003 10.545c0 6.292 7.299 12.305 10.709 14.982a2 2 0 00.01.008l.078.063.002-.002A2 2 0 0015 26a2 2 0 001.203-.404v.002l.024-.018.017-.014a2 2 0 00.02-.017C19.664 22.88 27 16.852 27 10.545A6.544 6.544 0 0020.455 4C17 4 15 7 15 7s-2-3-5.455-3z' />
        </Svg>
    )
);

HeartIcon.displayName = 'HeartIcon';

export { HeartIcon };
