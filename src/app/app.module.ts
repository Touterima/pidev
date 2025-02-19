import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingNavbarComponent } from './layouts/landing-layout/landing-navbar/landing-navbar.component';
import { LandingFooterComponent } from './layouts/landing-layout/landing-footer/landing-footer.component';

import { AdminFooterComponent } from './layouts/admin-layout/admin-footer/admin-footer.component';
import { HomeComponent } from './features/public/home/home.component';
import { DashboardComponent } from './features/admin/dashboard/dashboard.component';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout/landing-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout/admin-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactusComponent } from './features/public/contactus/contactus.component';
import { FormsModule } from '@angular/forms';
import { MeetingsComponent } from './features/public/meetings/meetings.component';
import { MeetingDetailsComponent } from './features/public/meeting-details/meeting-details.component';
import { AdminSidebarComponent } from './layouts/admin-layout/admin-sidebar/admin-sidebar.component';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminNavbarComponent } from './layouts/admin-layout/admin-navbar/admin-navbar.component';






@NgModule({
  declarations: [
   AppComponent,
   LandingNavbarComponent,
   LandingFooterComponent,
   AdminFooterComponent,
   HomeComponent,
   DashboardComponent,
   LandingLayoutComponent,
   AdminLayoutComponent,
   ContactusComponent,
   MeetingsComponent,
   MeetingDetailsComponent,
   AdminSidebarComponent,

   AdminNavbarComponent

 
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgbDropdownModule,
    
   
  ],

  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule {
  
 }
