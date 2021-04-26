import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeforeLoginService } from '../service/before-login.service';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent,
    canActivate: [BeforeLoginService]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
