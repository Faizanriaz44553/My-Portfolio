import path from 'path';  // Use import instead of require

export default {
    mode: 'development',  // Or 'production' for production build
    entry: './src/index.js',  // Update with your correct entry path
    output: {
      path: path.resolve('dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [
                ['@babel/plugin-transform-runtime', { corejs: 3 }],
              ],
            },
          },
        },
      ],
    },
  };
