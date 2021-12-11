import React, { memo, SVGProps } from 'react';

export const ChevronLeft = memo((props: SVGProps<SVGSVGElement>): JSX.Element => {
    return (
        <svg viewBox='0 0 30 30' width={30} height={30} {...props}>
            <path d='M17 3h2a1.002 1.002 0 01.774 1.634L11.292 15l8.482 10.367A1.001 1.001 0 0119 27h-2a1 1 0 01-.774-.367l-9-11a1.002 1.002 0 010-1.267l9-11C16.416 3.135 16.7 3 17 3z' />
        </svg>
    );
});

ChevronLeft.displayName = 'ChevronLeft';
