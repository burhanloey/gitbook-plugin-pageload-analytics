require([
    'gitbook',
    'jquery'
], function(gitbook, $) {
    gitbook.events.on('start', function(pluginsConfig) {
        var token = pluginsConfig["pageload-analytics"].token;
        console.log("pluginsConfig= " + JSON.stringify(pluginsConfig));
        console.log("token= " + token);
    });

    gitbook.events.on('page.change', function() {
        console.log("Hello! We're on new page now.");
    });
});
