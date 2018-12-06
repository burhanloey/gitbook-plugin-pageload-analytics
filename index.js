module.exports = {
    book: {
        assets: './assets',
        js: [
            'track.js'
        ]
    },
    filters: {
        token: function(config) {
            return config.get("token");
        }
    }
};
