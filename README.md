# Vue Responsive Images Example

[**Live Demo**](https://vue-responsive-images-example.netlify.app)

&nbsp;

This example uses three webpack loaders: [webpack-image-srcset-loader](https://github.com/Calvin-LL/webpack-image-srcset-loader), [webpack-image-resize-loader](https://github.com/Calvin-LL/webpack-image-resize-loader), and [webpack-image-placeholder-loader](https://github.com/Calvin-LL/webpack-image-placeholder-loader)

### [webpack-image-srcset-loader](https://github.com/Calvin-LL/webpack-image-srcset-loader) and [webpack-image-resize-loader](https://github.com/Calvin-LL/webpack-image-resize-loader)

These two loaders generate a `srcset` string with images of different sizes and the corresponding resized and optimized images. Smaller screens will load smaller images, improving load time.

### [webpack-image-placeholder-loader](https://github.com/Calvin-LL/webpack-image-placeholder-loader)

This loader generates a color for each image, you can use the color as a placeholder before the image loads.

## Project setup

```
npm install
```

### Run development server

```
npm run serve
```

### Compile

```
npm run build
```
