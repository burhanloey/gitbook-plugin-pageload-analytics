require([
    'gitbook',
    'jquery'
], function(gitbook, $) {
    gitbook.events.on('start', function() {
        console.log(JSON.stringify(gitbook));
    });

    gitbook.events.on('page.change', function() {
        console.log("Hello! We're on new page now.");
    });
});
