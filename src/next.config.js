module.exports = {
  distDir: 'build',

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.node = {
      fs: 'empty',
    };

    return config
  },
};
