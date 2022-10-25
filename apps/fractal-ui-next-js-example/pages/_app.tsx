import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
                <meta name='viewport' content='width=device-width' />
            </Head>
            <div suppressHydrationWarning id='root'>
                {typeof window !== 'undefined' && window.location ? <Component {...pageProps} /> : null}
            </div>
        </>
    );
}

export default MyApp;
