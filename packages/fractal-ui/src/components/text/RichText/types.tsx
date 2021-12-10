interface MinimalTextProps {
    selectable?: boolean;
    allowFontScaling?: boolean;
    children?: React.ReactNode;
    numberOfLines?: number;
    onPress?: () => void;
    style?: any;
    maxFontSizeMultiplier?: number | null | undefined;
}

interface BaseParseShape extends Pick<MinimalTextProps, Exclude<keyof MinimalTextProps, 'onPress'>> {
    renderText?: (matchingString: string, matches: string[]) => string;
    onPress?: (text: string, index: number) => void;
}

/**
 * This is for built-in-patterns already supported by this library
 */
interface DefaultParseShape extends BaseParseShape {
    type: 'url' | 'phone' | 'email';
}
/**
 * If you want to provide a custom regexp, this is the configuration to use.
 * -- For historical reasons, all regexps are processed as if they have the global flag set.
 * -- Use the nonExhaustiveModeMaxMatchCount property to match a limited number of matches.
 */
export interface CustomParseShape extends BaseParseShape {
    pattern: RegExp;
    /**
     * Enables "non-exhaustive mode", where you can limit how many matches are found.
     *
     * If you want to match at most N things per-call to parse(), provide a positive number here.
     */
    nonExhaustiveModeMaxMatchCount?: number;
}

export type ParseShape = DefaultParseShape | CustomParseShape;

export function isDefaultParseShape(value: unknown): value is DefaultParseShape {
    const casted = value as DefaultParseShape;
    return casted.type != null;
}

export interface RichTextProps extends MinimalTextProps {
    parse?: ParseShape[];
    childrenProps?: MinimalTextProps;
}
