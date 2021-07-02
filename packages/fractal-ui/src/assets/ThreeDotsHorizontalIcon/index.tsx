import React, { memo, SVGProps } from 'react';

const ThreeDotsHorizontalIcon = memo((props: SVGProps<SVGSVGElement>) => {
    return (
        <svg focusable={false} viewBox='0 0 18 4' {...props}>
            <g fillRule='evenodd'>
                <circle cx={16} cy={2} r={2} />
                <circle cx={9} cy={2} r={2} />
                <circle cx={2} cy={2} r={2} />
            </g>
        </svg>
    );
});

ThreeDotsHorizontalIcon.displayName = 'ThreeDotsHorizontalIcon';

export { ThreeDotsHorizontalIcon };
