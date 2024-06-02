/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/aws',
                destination: 'https://justinkennedy.awsapps.com/start',
                permanent: false,
            },
        ]
    }
}

module.exports = nextConfig
