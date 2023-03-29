import { MainExample } from '@fractal-software/fractal-examples';
import React, { useEffect, useState } from 'react';

export default function App() {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return <>{domLoaded ? <MainExample /> : null}</>;
}
