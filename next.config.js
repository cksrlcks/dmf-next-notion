/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    compiler: {
        styledComponents: {
            ssr: true,
        },
    },
    async redirects() {
        return [
            {
                source: "/",
                destination: "/menu",
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
