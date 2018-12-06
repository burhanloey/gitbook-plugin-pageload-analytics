module.exports = {
    book: {
        assets: './assets',
        js: [
            'track.js'
        ]
    },
    filters: {
        hello: function(name) {
            return "Hello " + name;
        }
    }
};
