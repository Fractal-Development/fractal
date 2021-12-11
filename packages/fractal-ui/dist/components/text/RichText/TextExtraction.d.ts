import { CustomParseShape } from './types';
interface MatchedPart {
    [key: string]: any;
    children: string;
    _matched?: boolean;
}
/**
 * Class to encapsulate the business logic of converting text into matches & props
 */
declare class TextExtraction {
    text: string;
    patterns: Array<CustomParseShape>;
    /**
     * @param {String} text - Text to be parsed
     * @param {CustomParseShape[]} patterns - Patterns to be used when parsed,
     *                                 any extra attributes, will be returned from parse()
     */
    constructor(text: string, patterns: Array<CustomParseShape>);
    /**
     * Returns parts of the text with their own props
     * @public
     * @return {Object[]} - props for all the parts of the text
     */
    parse(): MatchedPart[];
    getMatchedPart: (matchedPattern: CustomParseShape, text: string, matches: Array<string>, index: number) => MatchedPart;
}
export default TextExtraction;
