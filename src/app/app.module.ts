import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AcceuilLayoutComponent } from './layouts/acceuil-layout/acceuil-layout.component';
import { RouterModule } from '@angular/router';
import { ListIntershipOffersComponent } from './pages/IntershipOffers/list-intership-offers/list-intership-offers.component';
import { CreateIntershipOffersComponent } from './pages/IntershipOffers/create-intership-offers/create-intership-offers.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilLayoutComponent,
    DashboardLayoutComponent,
    AcceuilComponent,
    DashboardComponent,
    ListIntershipOffersComponent,
    CreateIntershipOffersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
