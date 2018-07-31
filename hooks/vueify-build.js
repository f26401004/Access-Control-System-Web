const fs = require('fs')
const browserify = require('browserify')
const vueify = require('vueify')
const envify = require('envify/custom')

// read main.js and use vueify to transform the target file to bundle.js  
browserify('www/js/main.js')
    .transform(vueify)
    .transform(
        // Required in order to process node_modules files
        { global: true },
        envify({ NODE_ENV: 'production' })
    )
    .bundle()
    .pipe(fs.createWriteStream('www/js/bundle.js'))