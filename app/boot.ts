import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {StateRegistry} from "ui-router-ng2";
//import { APP_ROUTER_PROVIDERS } from './app.routes';

bootstrap(AppComponent);
/*
bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS
])
.catch(err => console.error(err));
*/