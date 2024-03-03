// webpack.config.js

const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle file name
  },
  resolve: {
    // Resolving modules configuration
    fallback: {
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "zlib": require.resolve("browserify-zlib"),
      "stream": require.resolve("stream-browserify")
    },
  },
  // Other webpack configuration options can go here
};
