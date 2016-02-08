import {Component, View} from 'angular2/core';
import {HomePageService} from '../../services/home-page/service';
import {AddMoreBlocksButtonComponent} from '../button-component/add-more-blocks/button';


declare var Blocks: any;

@Component({
    directives: [AddMoreBlocksButtonComponent],
    template: `
        <style>
            .section {
                max-width: 1400px;
                margin: 0 auto;
            }
        </style>
        <div class="section">
            <h1> Home Page </h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>

        <div class="container">
            <div class="box" *ngFor="#block of blocksService.myInfo; #i = index">
                <div>
                    <img src="{{ block.img }}{{i}}/" width="100%" />
                    <p>{{ block.copy }}</p>
                    <span (click)="deleteBlock(i)">DELETE</span>
                </div>
            </div>
        </div>
        <add-blocks></add-blocks>
    `
})

export class HomePageComponent {
    blocks: any;

    constructor(public blocksService: HomePageService) {
        this.blocks = new Blocks();
        this.blocks.init({});
    }

    deleteBlock(i) {
        console.log("delete", i) 

        this.blocksService.myInfo.splice(i, 1);
    }
};

