import React, { memo, SVGProps } from 'react';

const FrustratedFaceIcon = memo(
    (props: SVGProps<SVGSVGElement>): JSX.Element => (
        <svg focusable={false} viewBox='0 0 68.044 68.045' {...props}>
            <g>
                <path d='M58.092 9.954a34.039 34.039 0 100 48.135 34.08 34.08 0 000-48.135m-3.717 44.421a28.786 28.786 0 110-40.707 28.816 28.816 0 010 40.707m-5.606-6.6a1.923 1.923 0 11-3.53 1.528 12.427 12.427 0 00-22.42 0 1.925 1.925 0 11-3.557-1.475 16.271 16.271 0 0129.507-.049' />
            </g>
        </svg>
    )
);

FrustratedFaceIcon.displayName = 'FrustratedFaceIcon';

export { FrustratedFaceIcon };
