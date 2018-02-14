import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { StoreComponent } from './store/store.component';


@NgModule({
    exports: [RouterModule],
    imports: [
        RouterModule.forRoot([
            {
              //  canActivate: [PopulatedCartRouteGuard],
                component: ShoppingCartComponent,
                path: 'cart'
            },
            {
                component: StoreComponent,
                path: 'store'
            },
            {
                component: StoreComponent,
                path: '**'
            }])
    ]
})

export class AppRoutingModule { }
