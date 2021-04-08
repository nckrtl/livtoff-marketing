const mix = require("laravel-mix");
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js")
    .postCss("resources/css/app.css", "public/css", [require("tailwindcss")])
    .webpackConfig({
        devServer: {
            https: true,
        },
    })
    .sourceMaps();

mix.browserSync({
    proxy: "https://livtoff-marketing.test",
    https: true,
    ghostMode: false,
    files: ["resources/views/**/*.php", "resources/views/**/*.html"],
});

if (mix.inProduction()) {
    mix.version();
}
