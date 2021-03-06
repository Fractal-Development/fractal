import React, { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CheckIcon = memo(
    (props: SvgProps): JSX.Element => (
        <Svg focusable={false} viewBox='0 0 50 50' width={50} height={50} {...props}>
            <Path d='M41.938 8.625a2 2 0 00-1.626.938L21.5 38.343 9.312 27.814a1.992 1.992 0 00-2.03-.52 1.998 1.998 0 00-.595 3.52l13.938 12.062a2.005 2.005 0 001.582.453 2.01 2.01 0 001.387-.89L43.687 11.75a1.997 1.997 0 00-1.75-3.125z' />
        </Svg>
    )
);

CheckIcon.displayName = 'CheckIcon';

export { CheckIcon };
