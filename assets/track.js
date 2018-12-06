require([
    'gitbook',
    'jquery'
], function(gitbook, $) {
    gitbook.events.on('start', function(pluginsConfig) {
        var token = gitbook.config.pluginsConfig["pageload-analytics"].token;
        console.log("token= " + JSON.stringify(pluginsConfig));
    });

    gitbook.events.on('page.change', function() {
        console.log("Hello! We're on new page now.");
    });
});
