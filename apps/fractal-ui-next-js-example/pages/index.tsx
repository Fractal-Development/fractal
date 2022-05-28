import { Text } from '@bma98/fractal-ui';
import React from 'react';
import { motion } from 'framer-motion';
// import { MainExample } from '@bma98/fractal-examples';

export default function App() {
    return (
        <div>
            <p>
                <Text>Hola</Text>
                <Text fontWeight={700}>Prueba</Text>
            </p>
            <p>
                <span>Hola</span>
                <span>Prueba</span>
            </p>
            <p>
                <motion.span>Hola</motion.span>
                <motion.span>Prueba</motion.span>
            </p>
        </div>
    );
}
