const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const config = (env, argv) => {
  // const { mode } = argv
  // const isProduction = mode === 'production'
  return {
    entry: './Web/src/index.js',
    output: {
      path: path.resolve(__dirname, 'Web/build'),
      filename: 'index.js'
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
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
          include: path.resolve(__dirname, './Web/src/')
        },
        {
          test: /\.(png|jpe?g|gif|glb|gltf|bin|svg)$/i,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/'
          }
        },
        {
          test: /.mdx?$/,
          use: [
            'babel-loader',
            '@mdx-js/loader'
          ]
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.css'],
      alias: {
        apiAlias: path.resolve(__dirname, './Web/src/'),
        '@tokens': path.resolve(__dirname, './Tokens/build/'),
        '@components': path.resolve(__dirname, './Web/src/component/'),
        '@web': path.resolve(__dirname, './Web/src/'),
        '@navigation': path.resolve(__dirname, './Web/src/navigation/'),
        '@assets': path.resolve(__dirname, './Web/src/assets/'),
        '@redux': path.resolve(__dirname, './Web/src/redux/')
      }
    },
    plugins: [new HtmlWebpackPlugin({ template: 'Web/src/index.html' })],
    devServer: {
      historyApiFallback: true,
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
