const path = require("path");
const withSass = require("@zeit/next-sass");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const withFonts = require("next-fonts");

module.exports = withFonts({
  assetPrefix: "https://example.com",
  webpack(config, options) {
    return config;
  }
});
const nextConfig = withSass({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(raw)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: "raw-loader"
    });
    config.module.rules.push({
      type: "javascript/auto",
      test: /\.modernizrrc(\.json)?$/,
      use: ["expose-loader?Modernizr", "modernizr-loader", "json-loader"]
    });
    config.module.rules.push({
      test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          publicPath: "./",
          outputPath: "static/",
          name: "[name].[ext]"
        }
      }
    });
    config.resolve = {
      alias: {
        modernizr$: path.resolve(__dirname, ".modernizrrc.json")
      }
    };
    if (config.mode === "production") {
      if (Array.isArray(config.optimization.minimizer)) {
        config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
      }
    }
    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();

      if (
        entries["main.js"] &&
        !entries["main.js"].includes("./client/polyfills.js")
      ) {
        entries["main.js"].unshift("./client/polyfills.js");
      }

      return entries;
    };
    return config;
  }
});

nextConfig.exportPathMap = () => {
  return {
    "/": { page: "/" }
  };
};

module.exports = nextConfig;
