import React, { memo, SVGProps } from 'react';

const EyeIcon = memo((props: SVGProps<SVGSVGElement>): JSX.Element => {
    return (
        <svg focusable={false} viewBox='0 0 24 18' {...props}>
            <g fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}>
                <path d='M1 9s4-8 11-8 11 8 11 8-4 8-11 8S1 9 1 9Z' />
                <path d='M15.823 9.001A3.823 3.823 0 1 1 12 5.178a3.823 3.823 0 0 1 3.823 3.823Z' />
            </g>
        </svg>
    );
});

EyeIcon.displayName = 'EyeIcon';

export { EyeIcon };
