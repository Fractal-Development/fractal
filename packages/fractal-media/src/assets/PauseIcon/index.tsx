import React, { memo, SVGProps } from 'react';

const PauseIcon = memo((props: SVGProps<SVGSVGElement>): JSX.Element => {
    return (
        <svg focusable={false} width='18' height='22' viewBox='0 0 18 22' {...props}>
            <path d='M2 0a2 2 0 00-2 2v18a2 2 0 002 2h2a2 2 0 002-2V2a2 2 0 00-2-2H2zm12 0a2 2 0 00-2 2v18a2 2 0 002 2h2a2 2 0 002-2V2a2 2 0 00-2-2h-2z' />
        </svg>
    );
});

PauseIcon.displayName = 'PauseIcon';

export { PauseIcon };
