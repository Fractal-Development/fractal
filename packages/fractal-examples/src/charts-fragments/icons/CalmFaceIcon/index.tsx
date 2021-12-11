import React, { memo, SVGProps } from 'react';

const CalmFaceIcon = memo((props: SVGProps<SVGSVGElement>): JSX.Element => (
        <svg focusable={false} viewBox='0 0 68.044 68.045' {...props}>
            <g>
                <g>
                    <path d='M58.092 9.955a34.039 34.039 0 100 48.135 34.078 34.078 0 000-48.135m-3.717 44.421a28.786 28.786 0 110-40.707 28.816 28.816 0 010 40.707' />
                    <path d='M25.712 43.33a1.243 1.243 0 01.655-1.587 1.149 1.149 0 011.518.681 7.425 7.425 0 0013.625.4 1.174 1.174 0 011.1-.72 1.139 1.139 0 01.444.1 1.24 1.24 0 01.586 1.613 9.726 9.726 0 01-17.932-.493' />
                </g>
            </g>
        </svg>
    ));

CalmFaceIcon.displayName = 'CalmFaceIcon';

export { CalmFaceIcon };
