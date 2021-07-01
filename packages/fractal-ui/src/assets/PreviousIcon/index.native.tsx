import React, { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PreviousIcon = memo((props: SvgProps): JSX.Element => {
    return (
        <Svg focusable={false} width={16} height={16} viewBox='0 0 16 16' {...props}>
            <Path
                d='M15.111 0c.491 0 .889.398.889.889V15.11a.889.889 0 01-1.415.715h-.002a.889.889 0 01-.024-.019L4.852 8.748a.889.889 0 01-.013-1.486L14.583.174A.889.889 0 0115.111 0zM1.333 0c.736 0 1.334.597 1.334 1.333v13.334a1.334 1.334 0 01-2.667 0V1.333C0 .597.597 0 1.333 0z'
                fillRule='nonzero'
            />
        </Svg>
    );
});

PreviousIcon.displayName = 'PreviousIcon';

export { PreviousIcon };
