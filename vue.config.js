module.exports = {
  publicPath: ".",
  chainWebpack: (config) => {
    config.module
      .rule("images")
      .test(/\.(png|jpe?g|gif|webp|tiff?)$/i)
      // if the import url looks like "some.png?placeholder..."
      .oneOf("placeholder")
      .resourceQuery(/placeholder/)
      .use("placeholder")
      .loader("webpack-image-placeholder-loader")
      .options({
        format: "hex",
        esModule: false,
      })
      .end()
      .end()
      // if the import url looks like "some.png?srcset..."
      .oneOf("srcset")
      .resourceQuery(/srcset/)
      .use("srcset")
      .loader("webpack-image-srcset-loader")
      .options({
        sizes: ["500w", "1000w", "1500w", null],
        esModule: false,
      })
      .end()
      .use("resize")
      .loader("webpack-image-resize-loader")
      .options({
        sharpOptions: {
          jpeg: {
            trellisQuantisation: true,
            overshootDeringing: true,
            progressive: true,
            optimiseScans: true,
            quantisationTable: 8,
          },
          webp: {
            smartSubsample: true,
            reductionEffort: 6,
          },
          png: {
            progressive: true,
            adaptiveFiltering: true,
            palette: true,
          },
        },
        fileLoaderOptions: {
          outputPath: "img",
        },
      })
      .end()
      .end()
      // if no previous resourceQuery match
      .oneOf("normal")
      .use("normal")
      .loader(config.module.rule("images").use("url-loader").get("loader"))
      .options(config.module.rule("images").use("url-loader").get("options"));

    config.module.rule("images").uses.delete("url-loader");
  },
};
