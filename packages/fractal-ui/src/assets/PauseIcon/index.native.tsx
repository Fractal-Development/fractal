import React, { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PauseIcon = memo((props: SvgProps): JSX.Element => {
    return (
        <Svg focusable={false} width={18} height={22} viewBox='0 0 18 22' {...props}>
            <Path
                d='M2 0a2 2 0 00-2 2v18a2 2 0 002 2h2a2 2 0 002-2V2a2 2 0 00-2-2H2zm12 0a2 2 0 00-2 2v18a2 2 0 002 2h2a2 2 0 002-2V2a2 2 0 00-2-2h-2z'
                fillRule='nonzero'
            />
        </Svg>
    );
});

PauseIcon.displayName = 'PauseIcon';

export { PauseIcon };
