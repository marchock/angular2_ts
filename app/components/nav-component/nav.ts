import {Component, ElementRef} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'nav-outlet',
    template: `
    <style>
        .navigation {
            position: absolute;
            top: 0;
            left: 0;
            width: 320px;
            height: 100%;
            background-color: gray;
        }

        .hide {
            display: none;
        }

        a {
            display: block;
            padding: 20px;
            background-color: #EFE;
        }

        .router-link-active {
            background-color: red;
        }
    </style>
    <div class="navigation hide">
      <a [routerLink]="['HomePage']" (click)="onClick()">Home Page</a>
      <a [routerLink]="['AboutUs']" (click)="onClick()">About Us</a>
      <a [routerLink]="['ContactUs']" (click)="onClick()">Contact Us</a>
      <button (click)="onClick()">Close Menu</button>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class NavComponent {

    constructor(public ele: ElementRef) {

    }

    onClick() {
        this.ele.nativeElement.querySelector('.navigation').setAttribute('class', 'navigation hide');
    }

}