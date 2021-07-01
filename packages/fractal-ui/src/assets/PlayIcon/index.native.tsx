import React, { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PlayIcon = memo((props: SvgProps): JSX.Element => {
    return (
        <Svg focusable={false} width={20} height={22} viewBox='0 0 20 22' {...props}>
            <Path
                d='M1.673.2a.887.887 0 00-.873.9v19.8c0 .497.39.9.873.9.181 0 .358-.06.506-.169l.002.002 17.31-9.816A.902.902 0 0020 11a.901.901 0 00-.534-.83L2.181.367h-.002A.855.855 0 001.673.2z'
                fillRule='nonzero'
            />
        </Svg>
    );
});

PlayIcon.displayName = 'PlayIcon';

export { PlayIcon };
