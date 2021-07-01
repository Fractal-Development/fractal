const DIGIT = '9';
const ALPHA = 'A';
const ALPHANUM = 'S';

interface MoneyOptions {
    delimiter: string;
    lastOutput?: string;
    precision: number;
    separator: string;
    showSignal?: boolean;
    suffixUnit: string;
    unit: string;
    zeroCents?: boolean;
    moneyPrecision: number;
}

interface PatternOptions {
    pattern: string;
    placeholder: string;
}

export class Masker {
    static mergeMoneyOptions(opts?: Partial<MoneyOptions>): MoneyOptions {
        const newOpts: MoneyOptions = {
            delimiter: opts?.delimiter || ',',
            lastOutput: opts?.lastOutput,
            precision: opts?.precision ? opts.precision : 2,
            separator: opts?.separator || '.',
            showSignal: opts?.showSignal,
            suffixUnit: (opts?.suffixUnit && ' ' + opts?.suffixUnit.replace(/[\s]/g, '')) || '',
            unit: (opts?.unit && opts.unit.replace(/[\s]/g, '') + ' ') || '$',
            zeroCents: opts?.zeroCents,
            moneyPrecision: 0
        };
        newOpts.moneyPrecision = newOpts.zeroCents ? 0 : newOpts.precision;
        return newOpts;
    }

    static toMoney(value: string, moneyOptions?: MoneyOptions): string {
        const opts = this.mergeMoneyOptions(moneyOptions);
        if (opts.zeroCents) {
            opts.lastOutput = opts.lastOutput || '';
            const zeroMatcher = '(' + opts.separator + '[0]{0,' + opts.precision + '})',
                zeroRegExp = new RegExp(zeroMatcher, 'g'),
                digitsLength = value.toString().replace(/[\D]/g, '').length || 0,
                lastDigitLength = opts.lastOutput.toString().replace(/[\D]/g, '').length || 0;
            value = value.toString().replace(zeroRegExp, '');
            if (digitsLength < lastDigitLength) {
                value = value.slice(0, value.length - 1);
            }
        }

        let number = value;
        // if separator is in string, make sure we zero-pad to respect it
        const separatorIndex = number.indexOf(opts.separator),
            missingZeros = opts.precision - (number.length - separatorIndex - 1);

        if (separatorIndex !== -1 && missingZeros > 0) {
            number = number + '0'.repeat(missingZeros);
        }

        number = number.replace(/[\D]/g, '');

        const clearDelimiter = new RegExp('^(0|\\' + opts.delimiter + ')'),
            clearSeparator = new RegExp('(\\' + opts.separator + ')$');
        let money = number.substr(0, number.length - opts.moneyPrecision),
            masked = money.substr(0, money.length % 3),
            cents = new Array(opts.precision + 1).join('0');
        money = money.substr(money.length % 3, money.length);
        for (let i = 0, len = money.length; i < len; i++) {
            if (i % 3 === 0) {
                masked += opts.delimiter;
            }
            masked += money[i];
        }
        masked = masked.replace(clearDelimiter, '');
        masked = masked.length ? masked : '0';
        let signal = '';
        if (opts.showSignal === true) {
            signal = Number(value) < 0 || (value.startsWith && value.startsWith('-')) ? '-' : '';
        }
        if (!opts.zeroCents) {
            const beginCents = Math.max(0, number.length - opts.precision),
                centsValue = number.substr(beginCents, opts.precision),
                centsLength = centsValue.length,
                centsSliced = opts.precision > centsLength ? opts.precision : centsLength;
            cents = (cents + centsValue).slice(-centsSliced);
        }
        const output = opts.unit + signal + masked + opts.separator + cents;
        return output.replace(clearSeparator, '') + opts.suffixUnit;
    }

    // Fill wildcards past index in output with placeholder

    static addPlaceholdersToOutput(output: string[], initialIndex: number, placeholder: string): string[] {
        for (let index = initialIndex; index < output.length; index++) {
            if (output[index] === DIGIT || output[index] === ALPHA || output[index] === ALPHANUM) {
                output[index] = placeholder;
            }
        }
        return output;
    }

    static toPattern(value: string, patternOptions: PatternOptions | string): string {
        const pattern = typeof patternOptions === 'object' ? patternOptions.pattern : patternOptions;
        const patternChars = pattern.replace(/\W/g, '');
        const output = pattern.split('');
        const values = value.toString().replace(/\W/g, '');
        const charsValues = values.replace(/\W/g, '');
        let index = 0;
        let i: number;
        const outputLength = output.length;
        const placeholder = typeof patternOptions === 'object' ? patternOptions.placeholder : undefined;
        for (i = 0; i < outputLength; i++) {
            // Reached the end of input
            if (index >= values.length) {
                if (patternChars.length == charsValues.length) {
                    return output.join('');
                } else if (placeholder !== undefined && patternChars.length > charsValues.length) {
                    return this.addPlaceholdersToOutput(output, i, placeholder).join('');
                } else {
                    break;
                }
            }
            // Remaining chars in input
            else {
                if (
                    (output[i] === DIGIT && values[index].match(/[0-9]/)) ||
                    (output[i] === ALPHA && values[index].match(/[a-zA-Z]/)) ||
                    (output[i] === ALPHANUM && values[index].match(/[0-9a-zA-Z]/))
                ) {
                    output[i] = values[index++];
                } else if (output[i] === DIGIT || output[i] === ALPHA || output[i] === ALPHANUM) {
                    if (placeholder !== undefined) {
                        return this.addPlaceholdersToOutput(output, i, placeholder).join();
                    } else {
                        return output.slice(0, i).join('');
                    }
                }
            }
        }
        return output.join('').substr(0, i);
    }

    static toNumber(value: string): string {
        return value.toString().replace(/(?!^-)[^0-9]/g, '');
    }

    static toAlphaNumeric(value: string): string {
        return value.toString().replace(/[^a-z0-9 ]+/i, '');
    }

    static removeNotNumbers(text: string): string {
        return text.replace(/[^0-9]+/g, '');
    }
}
