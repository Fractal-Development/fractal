import React, { memo, SVGProps } from 'react';

const CloseIcon = memo((props: SVGProps<SVGSVGElement>): JSX.Element => {
    return (
        <svg focusable={false} viewBox='0 0 30 30' width={30} height={30} {...props}>
            <path d='M7.979 5.98a2 2 0 00-1.393 3.434L12.172 15l-5.586 5.586a2 2 0 102.828 2.828L15 17.828l5.586 5.586a2 2 0 102.828-2.828L17.828 15l5.586-5.586a2 2 0 00-1.453-3.434 2 2 0 00-1.375.606L15 12.172 9.414 6.586A2 2 0 007.98 5.98z' />
        </svg>
    );
});

CloseIcon.displayName = 'CloseIcon';

export { CloseIcon };
