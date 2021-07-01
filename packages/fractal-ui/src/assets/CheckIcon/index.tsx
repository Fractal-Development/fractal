import React, { memo, SVGProps } from 'react';

const CheckIcon = memo((props: SVGProps<SVGSVGElement>): JSX.Element => {
    return (
        <svg focusable={false} viewBox='0 0 50 50' width={50} height={50} {...props}>
            <path d='M41.938 8.625a2 2 0 00-1.626.938L21.5 38.343 9.312 27.814a1.992 1.992 0 00-2.03-.52 1.998 1.998 0 00-.595 3.52l13.938 12.062a2.005 2.005 0 001.582.453 2.01 2.01 0 001.387-.89L43.687 11.75a1.997 1.997 0 00-1.75-3.125z' />
        </svg>
    );
});

CheckIcon.displayName = 'CheckIcon';

export { CheckIcon };
