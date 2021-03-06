import {Component, ElementRef} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CloseMenuDirective} from '../../directives/buttons/close-menu/directive';

@Component({
    selector: 'header-outlet',
    template: `
    <style>
        .header {
           max-width: 1400px;
           margin: 0 auto 40px;
           background-color: #dddddd;
           padding: 10px;
        }
        .menu-button {
          position: absolute;
          top: 0;
          right: 0;
        }
        .router-link-active {
            background-color: red;
        }
        a {
          margin: 0 20px;
          padding: 8px;
        }
    </style>
    <div class="header">
        <h1 class="title">Component Router</h1>
        <div class="menu-button" (click)="onClick()" btn-close-menu>Menu</div>
        <nav>
          <a [routerLink]="['HomePage']">Home Page</a>
          <a [routerLink]="['AboutUs']">About Us</a>
          <a [routerLink]="['ContactUs']">Contact Us</a>
          <a [routerLink]="['JigsawTest']">Jigsaw Test</a>
        </nav>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES, CloseMenuDirective]
})

export class HeaderComponent {

    ele: any;

    constructor(el: ElementRef) {
        //this.ele = document.querySelector('.navigation');
        //el.nativeElement.style.backgroundColor = 'yellow';
        //renderer.setElementStyle(el, 'backgroundColor', 'yellow');
    }

    onClick() {
        //this.ele.setAttribute('class', 'navigation');
    }
}