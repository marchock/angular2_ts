import {Component, View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomePageComponent} from './components/page-component/home';
import {AboutUsComponent} from './components/page-component/about-us';
import {ContactUsComponent} from './components/page-component/contact-us';

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
        }
    ])

export class AppComponent {
    // frameWork: string;
    // todoModal;

    // onClick(value) {
    //     console.log('onClick', value)
    // }

    // constructor(public myService:MyService) {
    //     this.framework = 'Angular 2';

    //     console.log('WORKING' this.myService.myInfo)

    // }
}


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
