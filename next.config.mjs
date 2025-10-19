/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'randomuser.me',
            },
        ],
    },
    experimental: {
        // This is to allow the development server to be accessed from the cloud workstation URL
        allowedDevOrigins: ["https://3001-firebase-terapias-cristi-1760833170924.cluster-xvr5pmatm5a4gx76fmat6kxt6o.cloudworkstations.dev"],
    },
};

export default nextConfig;
