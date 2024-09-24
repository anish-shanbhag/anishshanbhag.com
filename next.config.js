/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/synapse",
        destination: "https://terrific-friction-15e.notion.site/Documentation-reimagined-62d8db233e9644589bfe3a30e4556708",
        permanent: true,
      },
    ]
  },
};
