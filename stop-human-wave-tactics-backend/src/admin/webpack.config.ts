export default (config, webpack) => {
  // Note: we provide webpack above so you should not `require` it
  // Perform customizations to webpack config
  config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
  // Important: return the modified config
  config.cache = false
  return config;
};