import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthlayoutComponent } from './authlayout.component';
import { RouterModule, Routes } from '@angular/router';

const AuthRoutes:Routes = [
  {
    path:'',
    component: AuthlayoutComponent,
    children:[
      {
        path:'login',
        loadChildren: () => import("../../auth/login/login.module").then(m => m.LoginModule)
      },
      {
        path:'register',
        loadChildren: () => import("../../auth/register/register.module").then(m => m.RegisterModule)
      }
    ]
  }
]

@NgModule({
  declarations: [
    AuthlayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRoutes)
  ]
})
export class AuthlayoutModule { }
