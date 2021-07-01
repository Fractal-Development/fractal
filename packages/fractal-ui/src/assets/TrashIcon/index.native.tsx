import React, { memo } from 'react';
import Svg, { SvgProps, Path, G } from 'react-native-svg';

const TrashIcon = memo((props: SvgProps): JSX.Element => {
    return (
        <Svg width={27} height={28} viewBox='0 0 27 28' {...props}>
            <G fillRule='evenodd'>
                <Path d='M23.785 6.988h-5.84V5.037a2.828 2.828 0 00-2.922-2.723h-3.505a2.828 2.828 0 00-2.922 2.723v1.951H2.754a1.169 1.169 0 100 2.337h1.168V22.18a3.506 3.506 0 003.506 3.506h11.685a3.506 3.506 0 003.506-3.506V9.326h1.166a1.169 1.169 0 100-2.337zM10.933 5.037c0-.187.245-.386.584-.386h3.506c.339 0 .584.2.584.386v1.951h-4.674zm9.352 17.143a1.169 1.169 0 01-1.169 1.169H7.428a1.169 1.169 0 01-1.169-1.169V9.326h14.026z' />
                <Path d='M9.766 19.842a1.169 1.169 0 001.169-1.169V14a1.169 1.169 0 00-2.337 0v4.674a1.169 1.169 0 001.168 1.168z' />
                <Path d='M16.777 19.842a1.169 1.169 0 001.169-1.169V14a1.169 1.169 0 10-2.337 0v4.674a1.169 1.169 0 001.168 1.168z' />
            </G>
        </Svg>
    );
});

TrashIcon.displayName = 'TrashIcon';

export { TrashIcon };
