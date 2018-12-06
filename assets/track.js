require([
    'gitbook',
    'jquery'
], function(gitbook, $) {
    gitbook.events.on('start', function() {
        var token = gitbook.config.pluginsConfig["pageload-analytics"].token;
        console.log("token= " + token);
    });

    gitbook.events.on('page.change', function() {
        console.log("Hello! We're on new page now.");
    });
});
