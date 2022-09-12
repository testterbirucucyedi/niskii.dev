/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  cleanDistDir: true,
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/whoisniskii",
        permanent: false
      },
      {
        source: "/spotify",
        destination: "https://open.spotify.com/user/wu6vyqmi5jig37nh6nkp3wzhg",
        permanent: false
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/whoisniskii",
        permanent: false
      },
      {
        source: "playlist",
        destination: "https://open.spotify.com/playlist/2huBd3Ww3XupgkCRTRCB79",
        permanent: false
      }
    ];
  }
};

module.exports = nextConfig;
