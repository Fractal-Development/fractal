import React, { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const UploadIcon = memo((props: SvgProps): JSX.Element => (
        <Svg focusable={false} viewBox='0 0 477.863 477.863' {...props}>
            <Path d='M409.598 153.596h-85.333c-9.426 0-17.067 7.641-17.067 17.067s7.641 17.067 17.067 17.067h85.333c9.426 0 17.067 7.641 17.067 17.067v221.867c0 9.426-7.641 17.067-17.067 17.067H68.265c-9.426 0-17.067-7.641-17.067-17.067V204.796c0-9.426 7.641-17.067 17.067-17.067h85.333c9.426 0 17.067-7.641 17.067-17.067s-7.641-17.067-17.067-17.067H68.265c-28.277 0-51.2 22.923-51.2 51.2v221.867c0 28.277 22.923 51.2 51.2 51.2h341.333c28.277 0 51.2-22.923 51.2-51.2V204.796c0-28.277-22.923-51.2-51.2-51.2z' />
            <Path d='M336.331 90.33L250.998 4.997c-6.664-6.663-17.468-6.663-24.132 0L141.532 90.33c-6.548 6.78-6.36 17.584.42 24.132 6.614 6.388 17.099 6.388 23.713 0l56.201-56.201V341.33c0 9.426 7.641 17.067 17.067 17.067S256 350.756 256 341.33V58.262l56.201 56.201c6.78 6.548 17.584 6.36 24.132-.42 6.386-6.614 6.386-17.099-.002-23.713z' />
        </Svg>
    ));

UploadIcon.displayName = 'UploadIcon';

export { UploadIcon };
