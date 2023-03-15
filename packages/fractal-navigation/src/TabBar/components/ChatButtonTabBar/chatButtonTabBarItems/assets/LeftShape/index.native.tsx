import React, { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const LeftShapeIcon = memo(
    (props: SvgProps): JSX.Element => (
        <Svg focusable={false} width={61} height={75} viewBox='0 0 61 75' {...props}>
            <Path d='M61 75H0V0h61c0 4.1-3 6.5-7 7-14.6 2.1-27 15.5-27 30.5S39.4 66 54 68c4 .5 7 3 7 7z' />
        </Svg>
    )
);

LeftShapeIcon.displayName = 'LeftShapeIcon';

export { LeftShapeIcon };
