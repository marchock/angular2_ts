import {Component, View} from 'angular2/core';

declare var Jigsaw: any;

@Component({
    directives: [],
    template: `
        <style>
            .section {
                max-width: 1400px;
                margin: 0 auto;
            }

            .jigsaw {
                width: 1400px;
                height: 400px;
                background-color: #FEFEFE;
                margin: auto;
                position: relative;
                -webkit-transform: translate3d(0,0,0);
                /*overflow: hidden;*/
            }

            .jigsaw > div,
            .jigsaw > a {
                float: left;
                position: absolute;
                font-size: 20px;
                font-family: arial; 
                opacity: 1;
                background-color: #DDD;
                display: none;

            }

            .jigsaw > div:hover,
            .jigsaw > a:hover {
                opacity: 0.8;
            }

            .jigsaw .item.animate {
                -webkit-transition: opacity 0.5s;
                opacity: 0;
                /*-webkit-transform: translate3d(0, 5000px, 0);*/
            }

            .jigsaw .item.animate.start {
                opacity: 1;
                /*-webkit-transform: translate3d(0, 0px, 0);*/
            }


        </style>
        <div class="section">
            <h1> Jigsaw </h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>

        <div class="container">
            <div class="jigsaw">
                <a href="example_html.html" class="item largeitem"> Example HTML</a>
                <div class="item longitem"></div>
                <div class="item smallitem"></div>
                <div class="item smallitem"></div>

                <a href="example_page.html" class="item largeitem">Example Page</a>
                <div class="item smallitem"></div>
                <div class="item smallitem"></div>
                <a href="example_json.html" class="item largeitem">Example JSON</a>
                <a href="example_json_endpoint.html" class="item largeitem">Example JSON URL endpoint</a>
            </div>
        </div>
    `,
    providers: []
})

export class JigsawComponent {
    jigsaw: any;

    constructor() {
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

};
