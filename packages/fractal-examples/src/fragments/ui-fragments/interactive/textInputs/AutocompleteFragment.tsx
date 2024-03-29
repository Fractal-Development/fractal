import React, { useState } from 'react';
import {
    useTheme,
    Box,
    Layer,
    HorizontalLayer,
    AutoComplete,
    Popover,
    Button,
    CircularIconButton,
    LoadIcon
} from '@fractal-software/fractal-ui';

function PopoverContent() {
    const { spacings } = useTheme();
    return (
        <Box marginTop={spacings.m}>
            <Button variant='alternative' text='Pasion' />
        </Box>
    );
}

export function AutocompleteFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [active, setActive] = useState(false);

    const deactivate = () => setActive(false);
    const toggleActive = () => setActive((active) => !active);

    interface Film {
        id: string;
        title: string;
        year: number;
    }

    const top20Films: Array<Film> = [
        { id: '1', title: 'The Shawshank Redemption', year: 1994 },
        { id: '2', title: 'The Godfather', year: 1972 },
        { id: '3', title: 'The Godfather: Part II', year: 1974 },
        { id: '4', title: 'The Dark Knight', year: 2008 },
        { id: '5', title: '12 Angry Men', year: 1957 },
        { id: '6', title: "Schindler's List", year: 1993 },
        { id: '7', title: 'Pulp Fiction', year: 1994 },
        {
            id: '8',
            title: 'The Lord of the Rings: The Return of the King',
            year: 2003
        },
        { id: '9', title: 'The Good, the Bad and the Ugly', year: 1966 },
        { id: '10', title: 'Fight Club', year: 1999 },
        {
            id: '11',
            title: 'The Lord of the Rings: The Fellowship of the Ring',
            year: 2001
        },
        {
            id: '12',
            title: 'Star Wars: Episode V - The Empire Strikes Back',
            year: 1980
        },
        { id: '13', title: 'Forrest Gump', year: 1994 },
        { id: '14', title: 'Inception', year: 2010 },
        { id: '15', title: 'The Lord of the Rings: The Two Towers', year: 2002 },
        { id: '16', title: "One Flew Over the Cuckoo's Nest", year: 1975 },
        { id: '17', title: 'Goodfellas', year: 1990 },
        { id: '18', title: 'The Matrix', year: 1999 },
        { id: '19', title: 'Seven Samurai', year: 1954 },
        { id: '20', title: 'Star Wars: Episode IV - A New Hope', year: 1977 }
    ];

    const handleSelect = (option: Film | Film[]) => {
        console.log('onSelectFilm: ', option);
    };

    return (
        <Box marginTop={spacings.m} marginBottom={spacings.m} flex={1}>
            <AutoComplete
                placeholder='Escribe aquí'
                options={top20Films}
                onChangeText={(text) => console.log(`New text is ${text}`)}
                getOptionLabel={(option) => option.title}
                onSelect={handleSelect}
            />
            <Layer height={spacings.m} zIndex={-1} />
            <HorizontalLayer zIndex={-1}>
                <Layer flex={1}>
                    <AutoComplete
                        placeholder='AutoComplete and other component'
                        options={top20Films}
                        onChangeText={(text) => console.log(`New text is ${text}`)}
                        getOptionLabel={(option) => option.title}
                        onSelect={handleSelect}
                    />
                </Layer>
                <Popover active={active} onRequestClose={deactivate} popoverChildren={PopoverContent}>
                    {(ref) => (
                        <CircularIconButton ref={ref} onPress={toggleActive} variant='success' marginLeft={spacings.s}>
                            {(color) => <LoadIcon height={24} width={24} fill={color} />}
                        </CircularIconButton>
                    )}
                </Popover>
            </HorizontalLayer>
        </Box>
    );
}
