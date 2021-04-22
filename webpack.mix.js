let mix = require('laravel-mix');

mix.sass('src/master.scss', '/css/master.css')
   .setPublicPath('dist');
