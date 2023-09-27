import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthlayoutModule } from './modules/layout/authlayout/authlayout.module';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import("./modules/layout/authlayout/authlayout.module").then(m => AuthlayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
