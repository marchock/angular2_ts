System.register(['angular2/core', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var NavComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            NavComponent = (function () {
                function NavComponent(ele) {
                    this.ele = ele;
                }
                NavComponent.prototype.onClick = function () {
                    this.ele.nativeElement.querySelector('.navigation').setAttribute('class', 'navigation hide');
                };
                NavComponent = __decorate([
                    core_1.Component({
                        selector: 'nav-outlet',
                        template: "\n    <style>\n        .navigation {\n            position: absolute;\n            top: 0;\n            right: 0;\n            width: 320px;\n            height: 100%;\n            background-color: gray;\n            z-index: 100;\n        }\n\n        .hide {\n            display: none;\n        }\n\n        a {\n            display: block;\n            padding: 20px;\n            background-color: #EFE;\n        }\n\n        .router-link-active {\n            background-color: red;\n        }\n    </style>\n    <div class=\"navigation hide\">\n      <a [routerLink]=\"['HomePage']\" (click)=\"onClick()\">Home Page</a>\n      <a [routerLink]=\"['AboutUs']\" (click)=\"onClick()\">About Us</a>\n      <a [routerLink]=\"['ContactUs']\" (click)=\"onClick()\">Contact Us</a>\n      <button (click)=\"onClick()\">Close Menu</button>\n    </div>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], NavComponent);
                return NavComponent;
            })();
            exports_1("NavComponent", NavComponent);
        }
    }
});
//# sourceMappingURL=nav.js.map