import React, { memo } from 'react';
import Svg, { SvgProps, Path, G } from 'react-native-svg';

const FilterIcon = memo((props: SvgProps): JSX.Element => {
    return (
        <Svg width={24} height={24} viewBox='0 0 24 24' {...props}>
            <G fillRule='evenodd'>
                <Path d='M13.9 22a1 1 0 01-.6-.2l-4-3.05a1 1 0 01-.39-.8v-3.27l-4.8-9.22A1 1 0 015 4h14a.99.99 0 01.86 1.49l-5 9.21V21a.983.983 0 01-.96 1zm-3-4.54l2 1.53v-4.55A1 1 0 0113 14l4.3-8H6.64l4.13 8a1 1 0 01.11.46z' />
            </G>
        </Svg>
    );
});

FilterIcon.displayName = 'FilterIcon';

export { FilterIcon };
