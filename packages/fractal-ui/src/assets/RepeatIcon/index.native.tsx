import React, { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const RepeatIcon = memo((props: SvgProps): JSX.Element => {
    return (
        <Svg focusable={false} width={18} height={14} viewBox='0 0 18 14' {...props}>
            <Path
                d='M12.461 0v1.91H4.154C1.868 1.91 0 3.625 0 5.726a.628.628 0 00.343.559.745.745 0 00.698 0 .628.628 0 00.344-.559c0-1.413 1.232-2.545 2.769-2.545h8.307V5.09l4.847-2.546L12.46 0zm4.836 7.628c-.382.005-.687.294-.682.645 0 1.413-1.232 2.545-2.769 2.545H5.54V8.91L.692 11.455 5.54 14v-1.91h8.307c2.286 0 4.154-1.716 4.154-3.817a.611.611 0 00-.203-.46.725.725 0 00-.5-.185z'
                fillRule='nonzero'
            />
        </Svg>
    );
});

RepeatIcon.displayName = 'RepeatIcon';

export { RepeatIcon };
