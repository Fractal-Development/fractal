/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    transpilePackages: ['@fractal-software/fractal-ui'],
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: '/'
            }
        ];
    }
};

module.exports = nextConfig;
