module.exports = {
  optimizeFonts: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
  webpack: (config) => {
    config.module.rules.unshift({
      test: /.+\.(js|cjs|mjs)/,
      loader: 'shebang2-loader'
    });
    return config;
  }
}