import React, { memo, SVGProps } from 'react';

const TrazadoIcon = memo((props: SVGProps<SVGSVGElement>): JSX.Element => {
    return (
        <svg width='22' height='22' viewBox='0 0 22 22' {...props}>
            <path
                d='M1177.08 755a1.037 1.037 0 00-.26.039c-.02.007-.05.015-.07.024l-20.15 6.409a.928.928 0 00-.44.335.966.966 0 00-.16.522.886.886 0 00.12.449.976.976 0 00.32.334l6.13 4.859 12.11-9.65-9.65 12.108 4.85 6.121a.9.9 0 00.79.446.913.913 0 00.52-.164.9.9 0 00.33-.432h.01l6.41-20.172a.127.127 0 00.02-.056.762.762 0 00.04-.259.928.928 0 00-.27-.649.909.909 0 00-.65-.264z'
                transform='translate(-1156 -755)'
            ></path>
        </svg>
    );
});

TrazadoIcon.displayName = 'TrazadoIcon';

export { TrazadoIcon };
