module.exports = {
    type: 'web-module',
    npm: {
        esModules: false,
        umd: {
            global: 'ichefWebsite',
            externals: {}
        }
    }
};
