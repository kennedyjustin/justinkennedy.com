/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/aws',
                destination: 'https://justinkennedy.awsapps.com/start',
            },
        ]
    },
    async rewrites() {
        return {
            beforeFiles: [
                {
                    source: '/:path*',
                    has: [
                        {
                            type: 'host',
                            value: 'aws.justinkennedy.com',
                        },
                    ],
                    destination: '/aws',
                },
            ]
        }
    },
}

module.exports = nextConfig
