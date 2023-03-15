import React, { memo } from 'react';
import Svg, { SvgProps, Path, G } from 'react-native-svg';

const ExcitedFaceIcon = memo(
    (props: SvgProps): JSX.Element => (
        <Svg focusable={false} viewBox='0 0 68.044 68.045' {...props}>
            <G>
                <Path d='M58.092 9.955a34.039 34.039 0 100 48.135 34.078 34.078 0 000-48.135m-3.717 44.421a28.786 28.786 0 110-40.707 28.816 28.816 0 010 40.707m-5.606-13.27a16.271 16.271 0 01-29.507-.049 1.925 1.925 0 013.557-1.475 12.428 12.428 0 0022.42 0 1.923 1.923 0 113.53 1.528' />
            </G>
        </Svg>
    )
);

ExcitedFaceIcon.displayName = 'ExcitedFaceIcon';

export { ExcitedFaceIcon };
