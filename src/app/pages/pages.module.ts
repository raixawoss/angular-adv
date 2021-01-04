import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { ShareModule } from '../share/share.module';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule} from '@angular/router'
import { FormsModule} from '@angular/forms';

import { ComponentsModule } from '../components/components.module'
import { from } from 'rxjs';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
@NgModule({
  declarations: [
    DashboardComponent,
    Grafica1Component,
    ProgressComponent,
    PagesComponent,
    AccountSettingsComponent

  ],
  exports: [
    DashboardComponent,
    Grafica1Component,
    ProgressComponent,
    PagesComponent,
    AccountSettingsComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    CommonModule,
    ShareModule,
    FormsModule,
    ComponentsModule
  ]
})
export class PagesModule { }
