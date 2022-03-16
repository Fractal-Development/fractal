import React from 'react';
import { Text } from '../Text';
import TextExtraction from './TextExtraction';
import { CustomParseShape, isDefaultParseShape, RichTextProps, ParseShape } from './types';

export const PATTERNS = {
    url: /(https?:\/\/|www\.)[-a-zA-Z0-9@:%._\+~#=]{1,256}\.(xn--)?[a-z0-9-]{2,20}\b([-a-zA-Z0-9@:%_\+\[\],.~#?&\/=]*[-a-zA-Z0-9@:%_\+\]~#?&\/=])*/i,
    phone: /[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,7}/,
    email: /\S+@\S+\.\S+/
};

export function RichText(props: RichTextProps): JSX.Element {
    const { parse, childrenProps, ...others } = props;
    const getPatterns = (): CustomParseShape[] => {
        if (parse === undefined) {
            return [];
        }
        return parse.map<CustomParseShape>((option: ParseShape) => {
            if (isDefaultParseShape(option)) {
                const { type, ...patternOption } = option;
                if (!PATTERNS[type]) {
                    throw new Error(`${option.type} is not a supported type`);
                }
                return { ...patternOption, pattern: PATTERNS[type] };
            }
            return option;
        });
    };
    const getParsedText = () => {
        if (!parse) {
            return props.children;
        }
        if (typeof props.children !== 'string') {
            return props.children;
        }

        const textExtraction = new TextExtraction(props.children, getPatterns());

        return textExtraction.parse().map((textProps, index) => {
            const { style: parentStyle } = props;
            const { style, ...remainder } = textProps;
            return <Text key={`parsedText-${index}`} style={{ ...parentStyle, ...style }} {...childrenProps} {...remainder} />;
        });
    };

    return <Text {...others}>{getParsedText()}</Text>;
}
