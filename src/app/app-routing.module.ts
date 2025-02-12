import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AcceuilLayoutComponent } from './layouts/acceuil-layout/acceuil-layout.component';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent, // Page Home avec la template adminlte
    children: [
      { path: '', component: DashboardComponent }
    ]
  },
  {
    path: '',
    component: AcceuilLayoutComponent, // Page Home avec la template 2 Starter ButterCMS
    children: [
      { path: '', component: AcceuilComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
