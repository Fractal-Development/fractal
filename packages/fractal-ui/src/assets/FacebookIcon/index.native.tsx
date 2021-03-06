import React, { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FacebookIcon = memo(
    (props: SvgProps): JSX.Element => (
        <Svg focusable={false} viewBox='0 0 30 30' width={30} height={30} {...props}>
            <Path d='M12 27V15H8v-4h4V8.852C12 4.785 13.981 3 17.361 3c1.619 0 2.475.12 2.88.175V7h-2.305C16.501 7 16 7.757 16 9.291V11h4.205l-.571 4H16v12h-4z' />
        </Svg>
    )
);

FacebookIcon.displayName = 'FacebookIcon';

export { FacebookIcon };
