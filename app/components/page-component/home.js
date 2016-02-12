System.register(['angular2/core', '../../services/home-page/service', '../button-component/add-more-blocks/button'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, service_1, button_1;
    var HomePageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            }],
        execute: function() {
            HomePageComponent = (function () {
                function HomePageComponent(blocksService) {
                    this.blocksService = blocksService;
                }
                HomePageComponent.prototype.ngOnInit = function () {
                    console.log('ngOnInit');
                    this.blocks = new Blocks({});
                };
                HomePageComponent.prototype.deleteBlock = function (i) {
                    this.blocksService.myInfo.splice(i, 1);
                };
                HomePageComponent = __decorate([
                    core_1.Component({
                        directives: [button_1.AddMoreBlocksButtonComponent],
                        template: "\n        <style>\n            .section {\n                max-width: 1400px;\n                margin: 0 auto;\n            }\n        </style>\n        <div class=\"section\">\n            <h1> Home Page </h1>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n            Ipsum has been the industry's standard dummy text ever since the 1500s</p>\n        </div>\n\n        <div class=\"container\">\n            <div class=\"box\" *ngFor=\"#block of blocksService.myInfo; #i = index\">\n                <div>\n                    <img src=\"{{ block.img }}{{i}}/\" width=\"100%\" />\n                    <p>{{ block.copy }}</p>\n                    <span (click)=\"deleteBlock(i)\">DELETE</span>\n                </div>\n            </div>\n        </div>\n        <add-blocks></add-blocks>\n    ",
                        providers: [service_1.HomePageService]
                    }), 
                    __metadata('design:paramtypes', [service_1.HomePageService])
                ], HomePageComponent);
                return HomePageComponent;
            })();
            exports_1("HomePageComponent", HomePageComponent);
            ;
        }
    }
});
//# sourceMappingURL=home.js.map