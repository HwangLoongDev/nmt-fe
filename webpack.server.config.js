const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    library: "app",
    libraryTarget: "umd",
    filename: "[name].js",
  },
};
