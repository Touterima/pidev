import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/front-template/pages/home/home.component';

const routes: Routes = [
  { 
    path: '/landing', component: HomeComponent},
  
  
  // Optional: Add a 404 fallback route
  { path: '**', redirectTo: '', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  

})
export class AppRoutingModule { }
