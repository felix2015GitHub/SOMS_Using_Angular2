import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MembersService } from './members.service';
import { ProductsService } from './products.service';
import { OrdersService } from './orders.service';

@Component({
  selector: 'my-app',
  template: `
    <div class="pos-f-t">
      <div class="collapse" id="navbar-header">
        <div class="container bg-inverse p-a-1">
          <h3>{{title}}</h3>
        </div>
      </div>
      <nav class="navbar navbar-dark bg-inverse navbar-static-top">
        <div class="container">
          <button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2">
            &#9776;
          </button>
          <div class="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">
            <a class="navbar-brand" [routerLink]="['/']" routerLinkActive="active">{{title}}</a>
            <ul class="nav navbar-nav">
              <li class="nav-item">
                <a [routerLink]="['/members']" routerLinkActive="active" class="nav-link">會員管理</a>
              </li>
              <li class="nav-item">
                <a [routerLink]="['/products']" routerLinkActive="active" class="nav-link">產品管理</a>
              </li>
              <li class="nav-item">
                <a [routerLink]="['/orders']" routerLinkActive="active" class="nav-link">訂單管理</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <footer class="footer">
      <div class="container">
        <span class="text-muted" style="color:#fff">Copyright © Felix 2016</span>
      </div>
    </footer>
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        MembersService,
        ProductsService,
        OrdersService
    ]
})

export class AppComponent {
    title = '訂單管理系統';
}
