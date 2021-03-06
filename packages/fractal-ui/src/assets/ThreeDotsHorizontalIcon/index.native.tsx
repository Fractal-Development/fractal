import React, { memo } from 'react';
import Svg, { SvgProps, G, Circle } from 'react-native-svg';

const ThreeDotsHorizontalIcon = memo((props: SvgProps) => (
    <Svg focusable={false} viewBox='0 0 18 4' {...props}>
        <G fillRule='evenodd'>
            <Circle cx={16} cy={2} r={2} />
            <Circle cx={9} cy={2} r={2} />
            <Circle cx={2} cy={2} r={2} />
        </G>
    </Svg>
));

ThreeDotsHorizontalIcon.displayName = 'ThreeDotsHorizontalIcon';

export { ThreeDotsHorizontalIcon };
