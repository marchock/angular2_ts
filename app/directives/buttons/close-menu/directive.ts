import {Directive, ElementRef} from 'angular2/core';
@Directive({
    selector: '[btn-close-menu]',
    host: {
        '(click)': 'onClick()'
    }
})

export class CloseMenuDirective {

    ele: any;

    constructor(el: ElementRef) {
        this.ele = document.querySelector('.navigation');
    }

    onClick() {
        this.ele.setAttribute('class', 'navigation');
    }
}