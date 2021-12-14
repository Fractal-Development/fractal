import { ParseShape } from '@bma98/fractal-ui';
interface MessageTextProps {
    text: string | undefined;
    color?: string;
    parsePatterns?: Array<ParseShape>;
}
export declare function MessageText({ text, color, parsePatterns }: MessageTextProps): JSX.Element;
export {};
