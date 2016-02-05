import {provide} from 'angular2/core';

import {AppComponent} from './app.component';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from "angular2/router";
import {MyService} from './myService';


bootstrap(AppComponent, [ROUTER_PROVIDERS, MyService, provide(Window, { useValue: window })]);