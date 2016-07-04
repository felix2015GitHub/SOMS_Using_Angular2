import { provideRouter, RouterConfig }  from '@angular/router';
import { HomeComponent } from './home.component';
import { MembersComponent } from './members.component';
import { AddMemberComponent } from './addMember.component';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './addProduct.component';
import { OrdersComponent } from './orders.component';
import { AddOrderComponent } from './addOrder.component';

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
    path: 'addMember',
    component: AddMemberComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'addProduct',
    component: AddProductComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'addOrder',
    component: AddOrderComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];