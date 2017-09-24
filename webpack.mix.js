let mix = require('laravel-mix');

mix.options({
    processCssUrls: false,
    publicPath: 'dist'
});

mix.autoload({
    jquery: ['$', 'window.jQuery', 'jQuery']
});

mix.js('src/Slider.js', 'dist/');
 