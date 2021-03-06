import React, { SVGProps, memo } from 'react';

const PlayCircleIcon = memo(
    (props: SVGProps<SVGSVGElement>): JSX.Element => (
        <svg focusable={false} viewBox='0 0 30 30' {...props}>
            <path d='M15 3C8.373 3 3 8.373 3 15s5.373 12 12 12 12-5.373 12-12S21.627 3 15 3zm5.304 12.402l-7.608 4.392c-.383.221-.696.04-.696-.402v-8.785c0-.442.313-.623.696-.402l7.608 4.392c.383.222.383.584 0 .805z' />
        </svg>
    )
);

PlayCircleIcon.displayName = 'PlayCircleIcon';

export { PlayCircleIcon };
