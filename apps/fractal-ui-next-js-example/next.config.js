/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([
    '@bma98/fractal-charts',
    '@bma98/fractal-examples',
    '@bma98/fractal-ui',
    '@bma98/size-class',
    '@bma98/fractal-media',
    '@bma98/fractal-messaging',
    '@bma98/fractal-navigation',
    'd3-shape',
    'd3-path'
]);

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
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
