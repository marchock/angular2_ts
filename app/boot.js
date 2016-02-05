System.register(['angular2/core', './app.component', 'angular2/platform/browser', "angular2/router", './myService'], function(exports_1) {
    var core_1, app_component_1, browser_1, router_1, myService_1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (myService_1_1) {
                myService_1 = myService_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS, myService_1.MyService, core_1.provide(Window, { useValue: window })]);
        }
    }
});
//# sourceMappingURL=boot.js.map