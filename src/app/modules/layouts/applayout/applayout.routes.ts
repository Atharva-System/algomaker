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
            }
        ]
    }
]