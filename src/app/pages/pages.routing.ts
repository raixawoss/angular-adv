import { NgModule } from "@angular/core";

import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from '../pages/pages.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { Grafica1Component } from '../pages/grafica1/grafica1.component';
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from "./rxjs/rxjs.component";
export const routes: Routes = [

    {
        path: 'dashboard'
        , component: PagesComponent,
        children: [
            { path: '', component:DashboardComponent,data:{titulo:'Dashboard'}  },
            { path: 'progress', component: ProgressComponent,data:{titulo:'ProgressBar'} },
            { path: 'grafica1', component: Grafica1Component,data:{titulo:'Grafica #1'} },
            { path:'account-settings',component:AccountSettingsComponent,data:{titulo:'Ajustes'}},
            { path: 'promesas',component:PromesasComponent,data:{titulo:'Promesas'}},
            { path: 'rxjs',component:RxjsComponent,data:{titulo:'Rxjs'}}
        ]
    },
];
@NgModule(
    {
        imports: [RouterModule.forChild(routes)
            
        ],
        exports: [RouterModule]
    }
)
export class PagesRoutingModule {

}