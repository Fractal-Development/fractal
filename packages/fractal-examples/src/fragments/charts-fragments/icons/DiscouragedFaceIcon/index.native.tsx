import React, { memo } from 'react';
import Svg, { SvgProps, Path, G } from 'react-native-svg';

const DiscouragedFaceIcon = memo(
    (props: SvgProps): JSX.Element => (
        <Svg focusable={false} viewBox='0 0 68.044 68.045' {...props}>
            <G>
                <Path d='M58.092 9.954a34.039 34.039 0 100 48.135 34.079 34.079 0 000-48.135m-3.717 44.421a28.786 28.786 0 110-40.707 28.816 28.816 0 010 40.707m-11.388-6.66a1.243 1.243 0 01-.609 1.606 1.15 1.15 0 01-1.537-.637 7.425 7.425 0 00-13.631 0 1.173 1.173 0 01-1.083.752 1.127 1.127 0 01-.447-.091 1.24 1.24 0 01-.633-1.6 9.726 9.726 0 0117.939-.031' />
            </G>
        </Svg>
    )
);

DiscouragedFaceIcon.displayName = 'DiscouragedFaceIcon';

export { DiscouragedFaceIcon };
