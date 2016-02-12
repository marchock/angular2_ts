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
    var JigsawComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            JigsawComponent = (function () {
                function JigsawComponent() {
                    this.jigsaw = new Jigsaw({
                        select: {
                            option: "html",
                        },
                        load: {
                            btn: false,
                            index: 20,
                            animate: true,
                            framerate: 16
                        },
                        breakpoints: [
                            {
                                position: 320,
                                tile: {
                                    width: 120,
                                    height: 120,
                                    padding: 8
                                }
                            },
                            {
                                position: 480,
                                tile: {
                                    width: 160,
                                    height: 130,
                                    padding: 10
                                }
                            },
                            {
                                position: 1200,
                                tile: {
                                    width: 200,
                                    height: 180,
                                    padding: 18
                                }
                            }
                        ],
                        tile: [
                            {
                                classname: "largeitem",
                                w: 2,
                                h: 2
                            },
                            {
                                classname: "smallitem",
                                w: 1,
                                h: 1
                            },
                            {
                                classname: "longitem",
                                w: 1,
                                h: 2
                            },
                            {
                                classname: "wideitem",
                                w: 2,
                                h: 1
                            }
                        ]
                    });
                }
                JigsawComponent = __decorate([
                    core_1.Component({
                        directives: [],
                        template: "\n        <style>\n            .section {\n                max-width: 1400px;\n                margin: 0 auto;\n            }\n\n            .jigsaw {\n                width: 1400px;\n                height: 400px;\n                background-color: #FEFEFE;\n                margin: auto;\n                position: relative;\n                -webkit-transform: translate3d(0,0,0);\n                /*overflow: hidden;*/\n            }\n\n            .jigsaw > div,\n            .jigsaw > a {\n                float: left;\n                position: absolute;\n                font-size: 20px;\n                font-family: arial; \n                opacity: 1;\n                background-color: #DDD;\n                display: none;\n\n            }\n\n            .jigsaw > div:hover,\n            .jigsaw > a:hover {\n                opacity: 0.8;\n            }\n\n            .jigsaw .item.animate {\n                -webkit-transition: opacity 0.5s;\n                opacity: 0;\n                /*-webkit-transform: translate3d(0, 5000px, 0);*/\n            }\n\n            .jigsaw .item.animate.start {\n                opacity: 1;\n                /*-webkit-transform: translate3d(0, 0px, 0);*/\n            }\n\n\n        </style>\n        <div class=\"section\">\n            <h1> Jigsaw </h1>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n            Ipsum has been the industry's standard dummy text ever since the 1500s</p>\n        </div>\n\n        <div class=\"container\">\n            <div class=\"jigsaw\">\n                <a href=\"example_html.html\" class=\"item largeitem\"> Example HTML</a>\n                <div class=\"item longitem\"></div>\n                <div class=\"item smallitem\"></div>\n                <div class=\"item smallitem\"></div>\n\n                <a href=\"example_page.html\" class=\"item largeitem\">Example Page</a>\n                <div class=\"item smallitem\"></div>\n                <div class=\"item smallitem\"></div>\n                <a href=\"example_json.html\" class=\"item largeitem\">Example JSON</a>\n                <a href=\"example_json_endpoint.html\" class=\"item largeitem\">Example JSON URL endpoint</a>\n            </div>\n        </div>\n    ",
                        providers: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], JigsawComponent);
                return JigsawComponent;
            })();
            exports_1("JigsawComponent", JigsawComponent);
            ;
        }
    }
});
//# sourceMappingURL=jigsaw.js.map