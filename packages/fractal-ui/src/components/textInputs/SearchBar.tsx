import React, { forwardRef, useCallback } from 'react';
import { SearchIcon } from '../../assets/SearchIcon';
import { useControllableState } from '../../hooks/useControllableState';
import { ButtonTextField, ButtonTextFieldProps } from './ButtonTextField';

export interface SearchBarProps extends ButtonTextFieldProps {
    onSearch?: (query: string) => void;
    enableSearchButton?: boolean;
    ariaLabel?: string;
}

const SearchBar = forwardRef(
    (
        {
            value,
            onChangeText,
            onSearch,
            enableSearchButton = false,
            buttonText,
            buttonVariant = 'main',
            placeholder,
            ariaLabel = 'Search',
            ...others
        }: SearchBarProps,
        ref: any
    ): JSX.Element => {
        const [query, setQuery] = useControllableState(value, '', onChangeText);

        const handleChangeText = (text: string) => {
            if (!enableSearchButton) {
                onSearch?.(text);
            }
            setQuery(text);
        };

        const renderIcon = useCallback((color: string, size: number) => <SearchIcon height={size} width={size} fill={color} />, []);

        const handleSearch = () => {
            onSearch?.(query);
        };

        return (
            <ButtonTextField
                ref={ref}
                value={value}
                placeholder={placeholder}
                leftImage={enableSearchButton ? undefined : renderIcon}
                onChangeText={handleChangeText}
                textFieldProps={{ onSubmitEditing: enableSearchButton ? handleSearch : undefined }}
                showButton={enableSearchButton}
                buttonText={buttonText}
                buttonVariant={buttonVariant}
                onButtonPress={handleSearch}
                buttonAriaLabel={ariaLabel}
                buttonImage={renderIcon}
                {...others}
            />
        );
    }
);

SearchBar.displayName = 'SearchBar';

export { SearchBar };
