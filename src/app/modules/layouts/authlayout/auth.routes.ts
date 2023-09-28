import { Routes } from "@angular/router";
import { AuthlayoutComponent } from "./authlayout.component";

export const AuthRoutes:Routes = [
    {
        path:'',
        pathMatch:'prefix',
        component: AuthlayoutComponent,
        children:[
            {
                path:'login',
                loadChildren: () => import("../../auth/login/login.routes").then(m => m.LoginRoutes),
            },{
                path:'register',
                loadChildren: () => import("../../auth/register/register.routes").then(m => m.RegisterRoutes),
            }
        ]
    }
]