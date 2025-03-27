/** @type {import("next").NextConfig} */


const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "imagedelivery.net" },
      { hostname: "storage.googleapis.com" },
      { hostname: "picsum.photos" },
      { hostname: "imageio.forbes.com" },
      { hostname: "images.prismic.io" },
      { hostname: "venturebeat.com" },
      { hostname: "ik.imagekit.io" },
      { hostname: "nftevening.com" },
      { hostname: "playtoearn.net" },
      { hostname: "ampifire.com" },
      { hostname: "images.ctfassets.net" },
    ],
  },
  webpack: config => {
    config.externals.push("pino-pretty", "lokijs", "encoding", "fs");
    return config;
  },
  headers: async () => (
    [
      { source: "/.well-known/did.json", headers: [ { key: "Access-Control-Allow-Origin", value: "*" } ] },
    ]
  )
};

module.exports = nextConfig;
