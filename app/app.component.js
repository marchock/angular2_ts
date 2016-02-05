System.register(['angular2/core', 'angular2/router', './components/page-component/home', './components/page-component/about-us', './components/page-component/contact-us', './components/header-component/header', './components/nav-component/nav'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, home_1, about_us_1, contact_us_1, header_1, nav_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (about_us_1_1) {
                about_us_1 = about_us_1_1;
            },
            function (contact_us_1_1) {
                contact_us_1 = contact_us_1_1;
            },
            function (header_1_1) {
                header_1 = header_1_1;
            },
            function (nav_1_1) {
                nav_1 = nav_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <nav-outlet></nav-outlet>\n        <header-outlet></header-outlet>\n        <router-outlet></router-outlet>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES, header_1.HeaderComponent, nav_1.NavComponent]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/home',
                            name: 'HomePage',
                            component: home_1.HomePageComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/aboutus',
                            name: 'AboutUs',
                            component: about_us_1.AboutUsComponent
                        },
                        {
                            path: '/contactus',
                            name: 'ContactUs',
                            component: contact_us_1.ContactUsComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
// @View({
//     template: `
//         <h1>Myyyyy First {{ framework }} App</h1>
//         <h2>Template test app!!!!! App</h2>
//         <div *ngFor="#service of myService.myInfo"> {{ service }}</div>
//         <input type="text" [(ngModel)]="todoModal">
//         <p>{{ todoModal }}</p>
//         <div (click)="onClick(todoModal)">Click Me</div>
//         `
// })
//# sourceMappingURL=app.component.js.map