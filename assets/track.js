require([
    'gitbook',
    'jquery'
], function(gitbook, $) {
    gitbook.events.on('page.change', function() {
        ga('set', 'page', window.location.pathname);
        ga(function(tracker) {
            console.log('tracker= ' + JSON.stringify(tracker));
        });
    });
});
