System.register(['@angular/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1;
    var APP_ROUTER_PROVIDERS;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            /*
            import { CrisisListComponent }  from './crisis-list.component';
            import { HeroListComponent }    from './hero-list.component';
            
            export const routes: RouterConfig = [
              { path: 'crisis-center', component: CrisisListComponent },
              { path: 'heroes', component: HeroListComponent }
            ];
            */
            exports_1("APP_ROUTER_PROVIDERS", APP_ROUTER_PROVIDERS = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});
//# sourceMappingURL=app.routes.js.map