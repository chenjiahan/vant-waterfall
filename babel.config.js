module.exports = function(api) {
  api.cache(true);

  const { BABEL_MODULE, NODE_ENV } = process.env;

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          loose: true
        }
      ]
    ],
    plugins: [
      '@babel/plugin-transform-object-assign'
    ]
  };
};
