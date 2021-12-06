const config = require("@fzed51/webpack-config");

const localConfig = config({
  useReact: true,
  useTypescript: true,
  htmlWebpackPlugin: true,
  cleanOutput: true,
});

localConfig.module.rules.push({
  test: /\.txt$/i,
  use: "raw-loader",
});

module.exports = localConfig;
