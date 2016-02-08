// free test api http://jsonplaceholder.typicode.com/

// http://www.syntaxsuccess.com/viewarticle/angular-2.0-and-http

// USING HTTP requires these steps 
// 
// 1. add this link to index.html <script src="node_modules/rxjs/bundles/Rx.js"></script>

// 2. add this to boot.ts ( import {HTTP_PROVIDERS} from 'angular2/http'; )

// 3. add this to your component  ( import 'rxjs/add/operator/map'; ) 



import 'rxjs/add/operator/map'; // this must be loaded first
import {Component, View} from 'angular2/core';
import {Http, Response} from 'angular2/http';


@Component({
    selector: 'http',
    template: `

        <style>
            .posts {
                padding: 20px;
                background-color: #DDDDDD;
                margin: 20px;
            }
        </style>

        <div class="section">
            <h1> About Us </h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.</p>
        </div>


        <div class="posts" *ngFor="#post of posts">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
        </div>
    `
})

export class AboutUsComponent {

    result: Object;
    posts: any;
    url: string = 'http://jsonplaceholder.typicode.com/posts/';

    constructor(http: Http) {
        this.result = {};
        http.get(this.url)
            .map(res => res.json())
            .subscribe(
            data => this.posts = data,
            err => console.log('foo'),
            () => console.log('Got response from API', this.posts)
            );
    }
};