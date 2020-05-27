module.exports = {
  presets: [require('@babel/preset-env')],
  plugins: [
    require('@babel/plugin-transform-runtime'),
    require('@babel/plugin-proposal-object-rest-spread'),
    require('@babel/plugin-proposal-nullish-coalescing-operator'),
    require('@babel/plugin-proposal-optional-chaining'),
  ],
};
