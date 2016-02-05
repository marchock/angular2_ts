System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AboutUsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AboutUsComponent = (function () {
                function AboutUsComponent() {
                }
                AboutUsComponent = __decorate([
                    core_1.Component({
                        template: "\n        <div class=\"section\">\n            <h1> About Us </h1>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n            Ipsum has been the industry's standard dummy text ever since the 1500s, when\n            an unknown printer took a galley of type and scrambled it to make a type\n            specimen book. It has survived not only five centuries, but also the leap into\n            electronic typesetting, remaining essentially unchanged. It was popularised in\n            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n            and more recently with desktop publishing software like Aldus PageMaker\n            including versions of Lorem Ipsum.</p>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AboutUsComponent);
                return AboutUsComponent;
            })();
            exports_1("AboutUsComponent", AboutUsComponent);
            ;
        }
    }
});
//# sourceMappingURL=about-us.js.map