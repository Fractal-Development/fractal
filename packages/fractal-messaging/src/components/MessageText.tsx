import React from 'react';
import { RichText, ParseShape } from '@fractal/fractal-ui';

interface MessageTextProps {
    text: string | undefined;
    color?: string;
    parsePatterns?: Array<ParseShape>;
}

export function MessageText({ text, color, parsePatterns }: MessageTextProps): JSX.Element {
    return (
        <RichText style={{ textAlign: 'left', color }} parse={parsePatterns} childrenProps={{ allowFontScaling: false }}>
            {text}
        </RichText>
    );
}
