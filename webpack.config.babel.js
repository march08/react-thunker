import webpack from 'webpack';
import path from 'path';

const { NODE_ENV } = process.env;

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
  }),
];

const filename = `redux-thunker${NODE_ENV === 'production' ? '.min' : ''}.js`;

export default {
  module: {
    rules: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
    ],
  },
  mode: NODE_ENV,

  entry: ['./src/index'],

  output: {
    path: path.join(__dirname, 'dist'),
    filename,
    library: 'ReduxThunker',
    libraryTarget: 'umd',
  },

  plugins,
};
