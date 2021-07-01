import React, { memo } from 'react';
import Svg, { SvgProps, Circle } from 'react-native-svg';

const MoreVerticalIcon = memo((props: SvgProps) => {
    return (
        <Svg focusable={false} viewBox='0 0 384 384' {...props}>
            <Circle cx={192} cy={42.667} r={42.667} />
            <Circle cx={192} cy={192} r={42.667} />
            <Circle cx={192} cy={341.333} r={42.667} />
        </Svg>
    );
});

MoreVerticalIcon.displayName = 'MoreVerticalIcon';

export { MoreVerticalIcon };
