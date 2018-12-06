require([
    'gitbook',
    'jquery'
], function(gitbook, $) {
    gitbook.events.on('page.change', function() {
        ga('set', 'location', window.location.href);
        ga(function(tracker) {
            console.log('tracker= ' + JSON.stringify(tracker));
        });
    });
});
