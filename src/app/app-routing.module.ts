import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketComponent } from 'src/app/ticket/ticket.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'ticket/:dest', component: TicketComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
