/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([
    '@fractal-software/fractal-charts',
    '@fractal-software/fractal-examples',
    '@fractal-software/fractal-ui',
    '@fractal-software/size-class',
    '@fractal-software/fractal-media',
    '@fractal-software/fractal-messaging',
    '@fractal-software/fractal-navigation',
    '@fractal-software/firebase-db-manager',
    'd3-shape',
    'd3-path'
]);

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: true
    },
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: '/'
            }
        ];
    }
};

module.exports = withTM(nextConfig);
