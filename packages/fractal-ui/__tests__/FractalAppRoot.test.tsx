import React from 'react';
import { render, screen } from '@testing-library/react';
import '../__mocks__/matchMedia.mock';
import { FractalAppRoot, Text } from '../src';

describe('FractalAppRoot tests', () => {
    it('should contains the text', () => {
        render(
            <FractalAppRoot>
                <Text>Hola</Text>
            </FractalAppRoot>
        );
        const textElement = screen.getByText(/Hola/i);
        expect(textElement).toBeInTheDocument();
    });
});
