import React, { SVGProps, memo } from 'react';

const RightShapeIcon = memo(
    (props: SVGProps<SVGSVGElement>): JSX.Element => (
        <svg focusable={false} width={61} height={75} viewBox='0 0 61 75' transform='rotate(180)' {...props}>
            <path d='M61 75H0V0h61c0 4.1-3 6.5-7 7-14.6 2.1-27 15.5-27 30.5S39.4 66 54 68c4 .5 7 3 7 7z' />
        </svg>
    )
);

RightShapeIcon.displayName = 'RightShapeIcon';

export { RightShapeIcon };
