module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          screens: './screens',
          store: './store',
          assets: './assets',
          components: './components',
        },
      },
    ],
    'jest-hoist',
    'react-native-reanimated/plugin',
  ],
};
