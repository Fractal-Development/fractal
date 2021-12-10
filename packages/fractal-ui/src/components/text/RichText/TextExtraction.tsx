/* eslint-disable no-cond-assign */
/* eslint-disable no-underscore-dangle */
import { CustomParseShape } from './types';

interface MatchedPart {
    [key: string]: any;
    children: string;
    _matched?: boolean;
}

/**
 * Class to encapsulate the business logic of converting text into matches & props
 */
class TextExtraction {
    text: string;

    patterns: Array<CustomParseShape>;

    /**
     * @param {String} text - Text to be parsed
     * @param {CustomParseShape[]} patterns - Patterns to be used when parsed,
     *                                 any extra attributes, will be returned from parse()
     */
    constructor(text: string, patterns: Array<CustomParseShape>) {
        this.text = text;
        this.patterns = patterns || [];
    }

    /**
     * Returns parts of the text with their own props
     * @public
     * @return {Object[]} - props for all the parts of the text
     */
    public parse(): MatchedPart[] {
        let parsedTexts: MatchedPart[] = [{ children: this.text }];
        this.patterns.forEach((pattern) => {
            const newParts: MatchedPart[] = [];

            const tmp = pattern.nonExhaustiveModeMaxMatchCount || 0;
            const numberOfMatchesPermitted = Math.min(
                Math.max(Number.isInteger(tmp) ? tmp : 0, 0) || Number.POSITIVE_INFINITY,
                Number.POSITIVE_INFINITY
            );

            let currentMatches = 0;

            parsedTexts.forEach((parsedText) => {
                // Only allow for now one parsing
                if (parsedText._matched) {
                    newParts.push(parsedText);
                    return;
                }

                const parts: MatchedPart[] = [];
                let textLeft = parsedText.children;
                let indexOfMatchedString = 0;

                /** @type {RegExpExecArray} */
                let matches: RegExpExecArray | null;
                // Global RegExps are stateful, this makes it start at 0 if reused
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
                pattern.pattern.lastIndex = 0;
                while (textLeft && (matches = pattern.pattern.exec(textLeft))) {
                    const previousText = textLeft.substr(0, matches.index);
                    indexOfMatchedString = matches.index;

                    if (++currentMatches > numberOfMatchesPermitted) {
                        // Abort if we've exhausted our number of matches
                        break;
                    }

                    parts.push({ children: previousText });

                    parts.push(this.getMatchedPart(pattern, matches[0], matches, indexOfMatchedString));

                    textLeft = textLeft.substr(matches.index + matches[0].length);
                    indexOfMatchedString += matches[0].length - 1;
                    // Global RegExps are stateful, this makes it operate on the "remainder" of the string
                    pattern.pattern.lastIndex = 0;
                }

                parts.push({ children: textLeft });

                newParts.push(...parts);
            });

            parsedTexts = newParts;
        });

        // Remove _matched key.
        parsedTexts.forEach((parsedText) => delete parsedText._matched);
        return parsedTexts.filter((t) => !!t.children);
    }

    getMatchedPart = (matchedPattern: CustomParseShape, text: string, matches: Array<string>, index: number): MatchedPart => {
        const props: {
            [key: string]: any;
        } = {};

        Object.keys(matchedPattern).forEach((key) => {
            if (key !== 'pattern' && key !== 'renderText' && key !== 'nonExhaustiveModeMaxMatchCount') {
                if (key === 'onPress') {
                    // Support onPress
                    props[key] = () => matchedPattern.onPress?.(text, index);
                } else {
                    // Set a prop with an arbitrary name to the value in the match-config
                    props[key] = matchedPattern[key];
                }
            }
        });

        let children = text;
        if (matchedPattern.renderText && typeof matchedPattern.renderText === 'function') {
            children = matchedPattern.renderText(text, matches);
        }

        return {
            ...props,
            children,
            _matched: true
        };
    };
}

export default TextExtraction;
