import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonorsComponent } from './donors/donors.component';
import { NewDonorComponent } from './new-donor/new-donor.component';


const routes: Routes = [
  { path: 'donors', component: DonorsComponent},
  { path: 'new-donor', component: NewDonorComponent},
  { path: "", redirectTo: '/donors', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
