/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
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
