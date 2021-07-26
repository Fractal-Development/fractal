import React from 'react';
import { AutoCompleteConsumer } from './AutoCompleteConsumer';
import { SelectedOptionsProvider } from './context/SelectedOptionsContext';
import { AutoCompleteProps, IDEnabled } from './types';

export function AutoComplete<T extends IDEnabled>({
    controllableSelectedOptions,
    onSelect,
    multiple,
    ...others
}: AutoCompleteProps<T>): JSX.Element {
    return (
        <SelectedOptionsProvider controllableSelectedOptions={controllableSelectedOptions} onSelect={onSelect} multiple={multiple}>
            <AutoCompleteConsumer multiple={multiple} {...others} />
        </SelectedOptionsProvider>
    );
}
