import React, { memo, SVGProps } from 'react';

const FilterIcon = memo((props: SVGProps<SVGSVGElement>): JSX.Element => {
    return (
        <svg width='24' height='24' viewBox='0 0 24 24' {...props}>
            <g fillRule='evenodd'>
                <path d='M13.9 22a1 1 0 01-.6-.2l-4-3.05a1 1 0 01-.39-.8v-3.27l-4.8-9.22A1 1 0 015 4h14a.99.99 0 01.86 1.49l-5 9.21V21a.983.983 0 01-.96 1zm-3-4.54l2 1.53v-4.55A1 1 0 0113 14l4.3-8H6.64l4.13 8a1 1 0 01.11.46z' />
            </g>
        </svg>
    );
});

FilterIcon.displayName = 'FilterIcon';

export { FilterIcon };
