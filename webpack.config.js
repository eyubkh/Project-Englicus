const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const config = (env, argv) => {
  // const { mode } = argv
  // const isProduction = mode === 'production'
  return {
    entry: './Web/src/index.js',
    output: {
      path: path.resolve(__dirname, 'Web/build'),
      filename: 'main.js'
    },
    module: {
      rules: [
        {
          test: /\.js$|\.jsx$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: [['@babel/preset-react', { runtime: 'automatic' }], '@babel/preset-env']
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          include: path.resolve(__dirname, './Web/src')
        },
        {
          test: /\.(png|jpe?g|gif|glb|gltf|bin)$/i,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.css'],
      alias: {
        apiAlias: path.resolve(__dirname, './Web/src/'),
        '@tokens': path.resolve(__dirname, './Tokens/build/'),
        '@components': path.resolve(__dirname, './Web/src/Component/'),
        '@web': path.resolve(__dirname, './Web/src/')
      }
    },
    plugins: [new HtmlWebpackPlugin({ template: 'Web/src/index.html' })],
    devServer: {
      compress: false, // Gzip for compres the site
      port: 3000,
      open: true, // Open browser
      client: {
        overlay: true // Show errors on browser
      }
    }
  }
}

module.exports = config
