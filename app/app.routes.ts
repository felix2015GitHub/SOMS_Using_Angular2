import { provideRouter, RouterConfig }  from '@angular/router';
import { HomeComponent } from './home.component';
import { MembersComponent } from './members.component';
import { ProductsComponent } from './products.component';
import { OrdersComponent } from './orders.component';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/home',
    terminal: true
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'members',
    component: MembersComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];