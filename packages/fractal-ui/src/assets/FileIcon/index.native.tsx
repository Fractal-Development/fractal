import React, { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FileIcon = memo((props: SvgProps): JSX.Element => {
    return (
        <Svg focusable={false} viewBox='0 0 30 30' {...props}>
            <Path d='M24.707 8.793l-6.5-6.5A1 1 0 0017.5 2H7a2 2 0 00-2 2v22a2 2 0 002 2h16a2 2 0 002-2V9.5a1 1 0 00-.293-.707zM18 10a1 1 0 01-1-1V3.904L23.096 10H18z' />
        </Svg>
    );
});

FileIcon.displayName = 'FileIcon';

export { FileIcon };
