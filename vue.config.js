module.exports = {
  publicPath: ".",
  chainWebpack: (config) => {
    config.module
      .rule("images-srcset")
      .before("images")
      .test(/\.(png|jpe?g|webp|tiff?)$/i)
      // if the import url looks like "some.png?srcset..."
      .oneOf("srcset")
      .resourceQuery(/srcset/)
      .use("srcset")
      .loader("webpack-image-srcset-loader")
      .options({
        sizes: ["480w", "1024w", "1920w", "2560w", "original"],
        esModule: false,
      });

    config.module
      .rule("images-resize")
      .after("images")
      .test(/\.(png|jpe?g|webp|tiff?)$/i)
      // if the import url looks like "some.png?srcset..."
      .oneOf("srcset")
      .resourceQuery(/srcset/)
      .use("resize")
      .loader("webpack-image-resize-loader")
      .options({
        fileLoader: "url-loader",
        fileLoaderOptionsGenerator: (options, existingOptions) => ({
          ...existingOptions,
          fallback: {
            ...existingOptions.fallback,
            options: {
              ...defaultFileLoaderOptionsGenerator(
                options,
                existingOptions.fallback.options
              ),
            },
          },
        }),
      });

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
      // if no previous resourceQuery match
      .oneOf("normal")
      .use("normal")
      .loader(
        config.module
          .rule("images")
          .use("url-loader")
          .get("loader")
      )
      .options(
        config.module
          .rule("images")
          .use("url-loader")
          .get("options")
      );

    config.module.rule("images").uses.delete("url-loader");
  },
};
