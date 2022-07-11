import React, { memo, SVGProps } from 'react';

const HiddenEyeIcon = memo(
    (props: SVGProps<SVGSVGElement>): JSX.Element => (
        <svg focusable={false} viewBox='0 0 24.001 19.002' {...props}>
            <g fill='none' strokeLinecap='round' strokeWidth={2}>
                <path d='M17.94 15.443a10.072 10.072 0 0 1-5.942 2.059c-7 0-11-8-11-8a18.429 18.429 0 0 1 5.059-5.943L3.5 1l2.557 2.559A10.063 10.063 0 0 1 11.996 1.5c7 0 11 8 11 8a18.47 18.47 0 0 1-5.061 5.941L20.494 18Z' />
                <path d='M15.823 9.503A3.823 3.823 0 1 1 12 5.68a3.823 3.823 0 0 1 3.823 3.823Z' />
                <path d='m9.548 7.002 5 5' />
            </g>
        </svg>
    )
);

HiddenEyeIcon.displayName = 'HiddenEyeIcon';

export { HiddenEyeIcon };
