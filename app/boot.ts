import {provide} from 'angular2/core';

import {AppComponent} from './app.component';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from "angular2/router";
import {HTTP_PROVIDERS} from 'angular2/http';
import {MyService} from './services/my-service/myService';
import {HomePageService} from './services/home-page/service';


bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS, MyService, HomePageService, provide(Window, { useValue: window })]);