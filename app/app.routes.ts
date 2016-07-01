import { provideRouter, RouterConfig }  from '@angular/router';
import { MembersComponent } from './members.component';
import { ProductsComponent } from './products.component';
import { OrdersComponent } from './orders.component';

const routes: RouterConfig = [
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