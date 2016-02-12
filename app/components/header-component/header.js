System.register(['angular2/core', 'angular2/router', '../../directives/buttons/close-menu/directive'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, directive_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (directive_1_1) {
                directive_1 = directive_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent(el) {
                    //this.ele = document.querySelector('.navigation');
                    //el.nativeElement.style.backgroundColor = 'yellow';
                    //renderer.setElementStyle(el, 'backgroundColor', 'yellow');
                }
                HeaderComponent.prototype.onClick = function () {
                    //this.ele.setAttribute('class', 'navigation');
                };
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'header-outlet',
                        template: "\n    <style>\n        .header {\n           max-width: 1400px;\n           margin: 0 auto 40px;\n           background-color: #dddddd;\n           padding: 10px;\n        }\n        .menu-button {\n          position: absolute;\n          top: 0;\n          right: 0;\n        }\n        .router-link-active {\n            background-color: red;\n        }\n        a {\n          margin: 0 20px;\n          padding: 8px;\n        }\n    </style>\n    <div class=\"header\">\n        <h1 class=\"title\">Component Router</h1>\n        <div class=\"menu-button\" (click)=\"onClick()\" btn-close-menu>Menu</div>\n        <nav>\n          <a [routerLink]=\"['HomePage']\">Home Page</a>\n          <a [routerLink]=\"['AboutUs']\">About Us</a>\n          <a [routerLink]=\"['ContactUs']\">Contact Us</a>\n          <a [routerLink]=\"['JigsawTest']\">Jigsaw Test</a>\n        </nav>\n    </div>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES, directive_1.CloseMenuDirective]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], HeaderComponent);
                return HeaderComponent;
            })();
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});
//# sourceMappingURL=header.js.map