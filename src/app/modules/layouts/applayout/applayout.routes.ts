import { Routes } from "@angular/router";
import { ApplayoutComponent } from "./applayout.component";

export const AppRoutes:Routes = [
    {
        path:'',
        pathMatch:'prefix',
        component: ApplayoutComponent,
        children:[
            {
                path:'',
                loadChildren: () => import("../../pages/dashboard/dashboard.routes").then(m => m.dashboardRoutes)
            },
            {
                path:'Stragtegy/:platform/:accountId/:name/:full_name/:ts',
                loadChildren: () => import("../../pages/startegy-detail/strategy-detail.routes").then(m => m.startegyDetailRoutes)
            }
        ]
    }
]