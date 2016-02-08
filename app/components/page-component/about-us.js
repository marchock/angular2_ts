// free test api http://jsonplaceholder.typicode.com/
System.register(['rxjs/add/operator/map', 'angular2/core', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var AboutUsComponent;
    return {
        setters:[
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AboutUsComponent = (function () {
                function AboutUsComponent(http) {
                    var _this = this;
                    this.url = 'http://jsonplaceholder.typicode.com/posts/';
                    this.result = {};
                    http.get(this.url)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { return _this.posts = data; }, function (err) { return console.log('foo'); }, function () { return console.log('Got response from API', _this.posts); });
                }
                AboutUsComponent = __decorate([
                    core_1.Component({
                        selector: 'http',
                        template: "\n\n        <style>\n            .posts {\n                padding: 20px;\n                background-color: #DDDDDD;\n                margin: 20px;\n            }\n        </style>\n\n        <div class=\"section\">\n            <h1> About Us </h1>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n            Ipsum has been the industry's standard dummy text ever since the 1500s, when\n            an unknown printer took a galley of type and scrambled it to make a type\n            specimen book. It has survived not only five centuries, but also the leap into\n            electronic typesetting, remaining essentially unchanged. It was popularised in\n            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n            and more recently with desktop publishing software like Aldus PageMaker\n            including versions of Lorem Ipsum.</p>\n        </div>\n\n\n        <div class=\"posts\" *ngFor=\"#post of posts\">\n            <h3>{{ post.title }}</h3>\n            <p>{{ post.body }}</p>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AboutUsComponent);
                return AboutUsComponent;
            })();
            exports_1("AboutUsComponent", AboutUsComponent);
            ;
        }
    }
});
//# sourceMappingURL=about-us.js.map