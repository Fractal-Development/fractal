import React, { memo, SVGProps } from 'react';

const MoreVerticalIcon = memo((props: SVGProps<SVGSVGElement>): JSX.Element => {
    return (
        <svg focusable={false} viewBox='0 0 384 384' {...props}>
            <circle cx={192} cy={42.667} r={42.667} />
            <circle cx={192} cy={192} r={42.667} />
            <circle cx={192} cy={341.333} r={42.667} />
        </svg>
    );
});

MoreVerticalIcon.displayName = 'MoreVerticalIcon';

export { MoreVerticalIcon };
