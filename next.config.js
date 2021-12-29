module.exports = {
  webpack5: false,
  webpack: (config, {  buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      {
        test: /\.(jpe?g|png|gif|woff|woff2|mp4|pdf|svg)(\?[a-z0-9=.]+)?$/,
        options: {
          name: '[path][name].[ext]',
      },
    },
    )

    if (!isServer) {
      //config.resolve.fallback.fs = false;
    }
    return config;
  },

 // module: {
 //   rules: [
 //     {
 //       test: /\.(png|jpe?g|gif|woff|avi|mp4|pdf|svg)$/i,
 //       loader: 'file-loader',
 //       options: {
 //         name: '[path][name].[ext]',
 //       },
 //     },
 //   ],
 // },


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




