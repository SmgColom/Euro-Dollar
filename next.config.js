const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD;
  console.log(`isDev:${isDev}  isProd:${isProd}`);

  const reactStrictMode = true;

  const images = {
    remotePatterns: [
      { protocol: "https", hostname: "**.bbci.co.uk" },
      { protocol: "http", hostname: "**.bbc.co.uk" },
      { protocol: "https", hostname: "**.abc-cdn.net.au" },
      { protocol: "https", hostname: "**.**" },
      { protocol: "https", hostname: "**.**.**" },
    ],
  };

  const env = {
    SERVER_NAME: isDev ? "http://localhost:3000/" : "https://miletoroseguros.vercel.app/",
    NEWS_API_KEY: process.env.NEWS_API_KEY,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
    MONGO_ATLAS_CONNECTION_URI: process.env.MONGO_ATLAS_URI,
  };


  return {
    reactStrictMode,
    images,
    env,

    experimental: {
      turbo: false, 
    },
  };
};




