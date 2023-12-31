module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: './src',
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@config': './src/config',
          '@core': './src/core',
          '@features': './src/features',
          '@redux': './src/redux',
          '@shared': './src/shared',
        },
      },
    ],
    'nativewind/babel',
    'react-native-reanimated/plugin',
  ],
};
