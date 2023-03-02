/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([
    '@fractal/fractal-charts',
    '@fractal/fractal-examples',
    '@fractal/fractal-ui',
    '@fractal/size-class',
    '@fractal/fractal-media',
    '@fractal/fractal-messaging',
    '@fractal/fractal-navigation',
    '@fractal/firebase-db-manager',
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
