/** @type {import('next').NextConfig} */
const nextConfig = {
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
                    destination: 'https://justinkennedy.awsapps.com/start',
                },
            ]
        }
    },
}

module.exports = nextConfig
