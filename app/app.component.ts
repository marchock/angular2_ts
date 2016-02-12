import {Component, View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomePageComponent} from './components/page-component/home';
import {AboutUsComponent} from './components/page-component/about-us';
import {ContactUsComponent} from './components/page-component/contact-us';
import {JigsawComponent} from './components/page-component/jigsaw';

import {HeaderComponent} from './components/header-component/header';
import {NavComponent} from './components/nav-component/nav';

@Component({
    selector: 'my-app',
    template: `
        <nav-outlet></nav-outlet>
        <header-outlet></header-outlet>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES, HeaderComponent, NavComponent]
})

    @RouteConfig([
        {
            path: '/home',
            name: 'HomePage',
            component: HomePageComponent,
            useAsDefault: true
        },
        {
            path: '/aboutus',
            name: 'AboutUs',
            component: AboutUsComponent
        },
        {
            path: '/contactus',
            name: 'ContactUs',
            component: ContactUsComponent
        },
        {
            path: '/jigsawTest',
            name: 'JigsawTest',
            component: JigsawComponent
        }
    ])

export class AppComponent {}
