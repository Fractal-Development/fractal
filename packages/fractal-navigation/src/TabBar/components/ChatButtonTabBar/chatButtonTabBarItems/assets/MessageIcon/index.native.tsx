import React, { memo } from 'react';
import { Svg, SvgProps, Path } from 'react-native-svg';

const MessageIcon = memo((props: SvgProps): JSX.Element => {
    return (
        <Svg focusable={false} viewBox='0 0 85 84' {...props}>
            <Path d='M81.345 65.236a16.048 16.048 0 01.51-10.071C90.489 30.603 73.45 3.597 47.618.728a41.992 41.992 0 00-29.642 7.987A41.923 41.923 0 001.708 34.73a42.916 42.916 0 00-.73 7.657c0 .669.024 1.329.053 1.99 1.024 23.125 21.31 40.851 43.645 39.119 2.64-.2 5.254-.664 7.801-1.385.624-.18 1.232-.326 1.848-.465a40.873 40.873 0 0118.075.465c1.755.37 3.489.872 5.262 1.173 4.75.82 7.117-1.63 6.193-6.387-.768-3.912-1.457-7.842-2.51-11.66zm-8.348 1.87c.51 2.079.877 4.19 1.095 6.318a26.987 26.987 0 01-3.382-.494 31.427 31.427 0 00-15.995-.636 32.323 32.323 0 00-3.97 1.171 22.628 22.628 0 01-4.85 1.181 31.3 31.3 0 01-14.049-1.785 32.77 32.77 0 01-15.829-11.855A32.725 32.725 0 019.9 42.21a31.834 31.834 0 011.203-8.975 32.193 32.193 0 012.411-6.1A32.578 32.578 0 0124.222 14.98a32.615 32.615 0 0144.07 6.92c7.135 9.126 9.02 19.463 5.177 30.525a22.352 22.352 0 00-.46 14.682l-.012-.001z' />
        </Svg>
    );
});

MessageIcon.displayName = 'MessageIcon';

export { MessageIcon };
