module.exports = {
    type: 'web-module',
    npm: {
        esModules: false,
        umd: {
            global: 'ichefWebsite',
            externals: {}
        }
    },
    webpack: {
        html: {
            template: './src/index.html'
        }
    }
};
