import React, { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const BottomShapeIcon = memo(
    (props: SvgProps): JSX.Element => (
        <Svg focusable={false} width={74} height={61} viewBox='0 0 74 61' {...props}>
            <Path d='M74 0v61H0V0c4.1 0 6.5 3 7 7 2.1 14.6 15 27 30 27S65 21.6 67 7c.5-4 3-7 7-7z' />
        </Svg>
    )
);

BottomShapeIcon.displayName = 'BottomShapeIcon';

export { BottomShapeIcon };
