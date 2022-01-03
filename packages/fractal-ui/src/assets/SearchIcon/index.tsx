import React, { memo, SVGProps } from 'react';

const SearchIcon = memo(
    (props: SVGProps<SVGSVGElement>): JSX.Element => (
        <svg focusable={false} viewBox='0 0 22 22' {...props}>
            <path d='M21.639 19.9l-4.154-4.142a9.677 9.677 0 002.065-5.987 9.775 9.775 0 10-9.775 9.775 9.677 9.677 0 005.987-2.065l4.138 4.158a1.23 1.23 0 101.739-1.739zM2.444 9.775a7.331 7.331 0 117.331 7.331 7.331 7.331 0 01-7.331-7.331z' />
        </svg>
    )
);

SearchIcon.displayName = 'SearchIcon';

export { SearchIcon };
