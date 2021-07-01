import React, { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ShuffleIcon = memo((props: SvgProps): JSX.Element => {
    return (
        <Svg focusable={false} viewBox='0 0 18 14' width={18} height={14} {...props}>
            <Path
                d='M13.682 0v2.1H12.01a4.354 4.354 0 00-3.592 1.87L7.206 5.738 5.995 3.97A4.354 4.354 0 002.402 2.1H.73a.724.724 0 00-.632.347.684.684 0 000 .706c.13.218.372.35.632.347h1.672a2.9 2.9 0 012.395 1.247L6.342 7 4.797 9.253A2.9 2.9 0 012.402 10.5H.73a.724.724 0 00-.632.347.684.684 0 000 .706c.13.218.372.35.632.347h1.672a4.354 4.354 0 003.593-1.87l1.211-1.768 1.212 1.768a4.354 4.354 0 003.592 1.87h1.672V14L18 11.2l-4.318-2.8v2.1H12.01c-.963 0-1.86-.467-2.395-1.247L8.071 7l1.544-2.253A2.898 2.898 0 0112.01 3.5h1.672v2.1L18 2.8 13.682 0z'
                fillRule='nonzero'
            />
        </Svg>
    );
});

ShuffleIcon.displayName = 'ShuffleIcon';

export { ShuffleIcon };
