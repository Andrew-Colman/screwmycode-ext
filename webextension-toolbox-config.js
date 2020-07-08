// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)
const webpack = require('webpack')

module.exports = {
    webpack: (config, { dev, vendor }) => {
        config.module.rules.push({
            test: /\.vue$/,
            loader: 'vue-loader'
        })

        config.plugins.push(
            new VueLoaderPlugin()
        )
        
        return config
    }
}