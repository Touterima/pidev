import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout/landing-layout.component';
import { HomeComponent } from './features/public/home/home.component';
import { ContactusComponent } from './features/public/contactus/contactus.component';
import { MeetingsComponent } from './features/public/meetings/meetings.component';
import { AppComponent } from './app.component';
import { MeetingDetailsComponent } from './features/public/meeting-details/meeting-details.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout/admin-layout.component';
import { DashboardComponent } from './features/admin/dashboard/dashboard.component';


const routes: Routes = [
  
  {
    path: '',
    component: LandingLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'contact', component: ContactusComponent },
      { path: 'meetings', component: MeetingsComponent },
      { path: 'meeting-details', component: MeetingDetailsComponent },
     
    
    ]
  },
  {
  path: 'admin',
  component: AdminLayoutComponent,
  children: [
    { path: 'dashboard', component: DashboardComponent },
    
  ]
},
  { path: '**', redirectTo: '/' } 
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  

})
export class AppRoutingModule {

 }
