import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AccueilComponent } from './accueil/accueil.component';
import { Erreur404Component } from '../core/erreur404/erreur404.component';

const routes: Routes = [
  {
  	path:'', component: LayoutComponent, children:
  	[
  	  {path: '', component: AccueilComponent },
  	  {
        path: '**', component: Erreur404Component  
      },
  	]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
