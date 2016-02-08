import {Component, ElementRef} from 'angular2/core';

@Component({
    selector: 'add-blocks',
    template: `
        <style>
            .btn {
                width: 10%;
                margin: 50px 45%;
                padding: 20px;
                background-color: gray;
                text-align: center;
            }
        </style>
        <div class="btn" (click)="onClick()">
            Add more blocks
        </div>
    `
})

export class AddMoreBlocksButtonComponent {

    ele: any;

    constructor(el: ElementRef) {
        this.ele = document.querySelector('.container');
    }


    onClick() {

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

            div2.appendChild(img)
            div2.appendChild(p)
            div1.appendChild(div2);
            this.ele.appendChild(div1);
        }
    }
};
