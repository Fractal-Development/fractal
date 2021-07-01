import React, { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ChevronDownIcon = memo((props: SvgProps): JSX.Element => {
    return (
        <Svg focusable={false} viewBox='0 0 30 30' width={30} height={30} {...props}>
            <Path d='M3 12v-2a1.002 1.002 0 011.634-.774L15 17.708l10.367-8.482A1.001 1.001 0 0127 10v2a1 1 0 01-.367.774l-11 9a1.002 1.002 0 01-1.267 0l-11-9A1.003 1.003 0 013 12z' />
        </Svg>
    );
});

ChevronDownIcon.displayName = 'ChevronDownIcon';

export { ChevronDownIcon };
