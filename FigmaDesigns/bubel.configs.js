module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preser-expo"],
    plugins: ["react-native-reanimated/plugin"],
  };
};
