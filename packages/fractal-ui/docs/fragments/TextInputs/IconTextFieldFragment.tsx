import React from 'react';
import { useTheme, Box, IconTextField, Text, SearchIcon } from '../../../src';

export function IconTextFieldFragment(): JSX.Element {
    const { spacings } = useTheme();

    const renderSearchIcon = React.useCallback((color: string, size: number) => <SearchIcon height={size} width={size} fill={color} />, []);

    return (
        <>
            <Text variant={'title'}>Icon Text Field Example</Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <IconTextField leftImage={renderSearchIcon} placeholder='Escribe aquí' marginBottom={spacings.s} />
                <IconTextField rightImage={renderSearchIcon} placeholder='Escribe aquí' />
            </Box>
        </>
    );
}
