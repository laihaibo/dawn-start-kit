module.exports = function(configs, webpack, ctx) {
  //configs 为默认配置，可以在这里对其进行修改
  //webpack 当前 webpack 实例
  //ctx 当前构建「上下文实例」
  configs.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  );
};
