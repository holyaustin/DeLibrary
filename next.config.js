module.exports = {
  webpack5: false,
  webpack: (config, {  buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      {
        test: /\.(jpe?g|png|gif|woff|woff2|mp4|pdf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000' 
      }
    )

    if (!isServer) {
      //config.resolve.fallback.fs = false;
    }
    return config;
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
 },
  reactStrictMode: true,
 // exportTrailingSlash: true,
}




