import React, { memo, SVGProps } from 'react';

const TrashIcon = memo((props: SVGProps<SVGSVGElement>): JSX.Element => {
    return (
        <svg width='27' height='28' viewBox='0 0 27 28' {...props}>
            <g fillRule='evenodd'>
                <path
                    d='M24.2 6.674h-5.84V4.723A2.828 2.828 0 0015.438 2h-3.505a2.828 2.828 0 00-2.922 2.723v1.951H3.169a1.169 1.169 0 100 2.337h1.168v12.855a3.506 3.506 0 003.506 3.506h11.685a3.506 3.506 0 003.506-3.506V9.012H24.2a1.169 1.169 0 100-2.337zM11.348 4.723c0-.187.245-.386.584-.386h3.506c.339 0 .584.2.584.386v1.951h-4.674zM20.7 21.866a1.169 1.169 0 01-1.169 1.169H7.843a1.169 1.169 0 01-1.169-1.169V9.012H20.7z'
                    transform='translate(-.415 .314)'
                />
                <path
                    d='M9.169 18.011a1.169 1.169 0 001.169-1.169v-4.673a1.169 1.169 0 00-2.337 0v4.674a1.169 1.169 0 001.168 1.168z'
                    transform='translate(.597 1.831)'
                />
                <path
                    d='M15.169 18.011a1.169 1.169 0 001.169-1.169v-4.673a1.169 1.169 0 10-2.337 0v4.674a1.169 1.169 0 001.168 1.168z'
                    transform='translate(1.608 1.831)'
                />
            </g>
        </svg>
    );
});

TrashIcon.displayName = 'TrashIcon';

export { TrashIcon };
