import React, { memo, SVGProps } from 'react';

const LoadIcon = memo((props: SVGProps<SVGSVGElement>): JSX.Element => {
    return (
        <svg width='28' height='28' viewBox='0 0 28 28' {...props}>
            <rect width='18' height='2' rx='1' transform='translate(5 21)' />
            <rect width='4' height='2' rx='1' transform='rotate(-90 14 9)' />
            <rect width='4' height='2' rx='1' transform='rotate(-90 22 1)' />
            <path
                d='M5.833 0a1.167 1.167 0 01.677.21l4.667 3.29a1.167 1.167 0 11-1.354 1.9l-3.99-2.787L1.867 5.6a1.167 1.167 0 11-1.4-1.867l4.666-3.5a1.167 1.167 0 01.7-.233z'
                transform='translate(8.165 3.5)'
            />
            <path
                d='M1.167 0a1.167 1.167 0 011.166 1.167V10.5A1.167 1.167 0 010 10.5V1.167A1.167 1.167 0 011.167 0z'
                transform='translate(12.832 5.833)'
            />
        </svg>
    );
});

LoadIcon.displayName = 'LoadIcon';

export { LoadIcon };
