import { Routes } from "@angular/router";
import { ApplayoutComponent } from "./applayout.component";

export const AppRoutes:Routes = [
    {
        path:'',
        pathMatch:'prefix',
        component: ApplayoutComponent
    }
]