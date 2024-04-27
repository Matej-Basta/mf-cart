const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const deps = require('./package.json').dependencies;


module.exports = function override(config, env) {
    // Set the public path based on the environment
    const publicPath = env === 'development' ? 'http://localhost:3009/' : 'https://mf-cart.vercel.app/';

    // Ensure the public path is set in the output configuration
    config.output = {
        ...config.output,
        publicPath: publicPath,
    };

  config.plugins = [
    new ModuleFederationPlugin({
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes: {
        './Cart': './src/components/CartIcon.tsx', 
      },
      shared: {
        // Shared dependencies
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
      },
    },
    }),
    ...config.plugins,
  ];

  // Ensure HtmlWebpackPlugin is correctly configured if you're customizing the HTML output
  const htmlWebpackPlugin = config.plugins.find(
    plugin => plugin instanceof HtmlWebpackPlugin,
  );
  if (htmlWebpackPlugin) {
    htmlWebpackPlugin.options.inject = true;
  }

  return config;
};
