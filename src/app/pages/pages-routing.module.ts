import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterLoginService } from '../service/after-login.service';
import { PagesComponent } from './pages.component';

const routes: Routes = [
 {
  path: '',
  component: PagesComponent,
  canActivate: [AfterLoginService],
  children: [
    {
      path: "products", loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
      canActivate: [AfterLoginService],
    }
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
