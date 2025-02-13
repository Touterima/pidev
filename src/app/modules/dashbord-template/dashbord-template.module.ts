import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordTemplateRoutingModule } from './dashbord-template-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    DashbordTemplateRoutingModule
  ]
})
export class DashbordTemplateModule { }
