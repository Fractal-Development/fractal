import React, { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const EmailIcon = memo((props: SvgProps): JSX.Element => {
    return (
        <Svg viewBox='0 0 30 30' width={30} height={30} {...props}>
            <Path d='M2.537 6l11.274 10.521a1.746 1.746 0 002.378 0L27.463 6H2.537zM1 7.3v15.286l7.906-7.906L1 7.3zm28 0l-7.906 7.38L29 22.586V7.3zm-18.633 8.745L2.414 24h25.172l-7.955-7.955-2.076 1.937a3.74 3.74 0 01-2.557 1.004 3.735 3.735 0 01-2.555-1.004l-2.076-1.937z' />
        </Svg>
    );
});
