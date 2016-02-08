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
    var AddMoreBlocksButtonComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AddMoreBlocksButtonComponent = (function () {
                function AddMoreBlocksButtonComponent(el) {
                    this.ele = document.querySelector('.container');
                }
                AddMoreBlocksButtonComponent.prototype.onClick = function () {
                    var i = 0;
                    for (i = 0; i < 10; i += 1) {
                        var div1 = document.createElement("div");
                        var div2 = document.createElement("div");
                        var p = document.createElement("p");
                        var img = document.createElement("img");
                        var t = document.createTextNode("Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin  treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.");
                        div1.setAttribute("class", "box");
                        img.setAttribute("src", "http://lorempixel.com/400/400/city/" + i + "/");
                        img.setAttribute("width", "100%");
                        p.appendChild(t);
                        div2.appendChild(img);
                        div2.appendChild(p);
                        div1.appendChild(div2);
                        this.ele.appendChild(div1);
                    }
                };
                AddMoreBlocksButtonComponent = __decorate([
                    core_1.Component({
                        selector: 'add-blocks',
                        template: "\n        <style>\n            .btn {\n                width: 10%;\n                margin: 50px 45%;\n                padding: 20px;\n                background-color: gray;\n                text-align: center;\n            }\n        </style>\n        <div class=\"btn\" (click)=\"onClick()\">\n            Add more blocks\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AddMoreBlocksButtonComponent);
                return AddMoreBlocksButtonComponent;
            })();
            exports_1("AddMoreBlocksButtonComponent", AddMoreBlocksButtonComponent);
            ;
        }
    }
});
//# sourceMappingURL=button.js.map