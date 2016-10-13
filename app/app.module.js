(function (app) {
    'use strict';

    app.AppModule =
        ng.core.NgModule({
            imports: [ ng.platformBrowser.BrowserModule ],
            declarations: [ app.AppComponent ],
            bootstrap: [ app.AppComponent ]
        })
        .Class({
            constructor: function() {}
        });
})(window.app || (window.app = {}));
