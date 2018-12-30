import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './site/accueil/accueil.component';
import { Erreur404Component } from './core/erreur404/erreur404.component';

const routes: Routes = [
	{
		path:'', redirectTo: '/site', pathMatch: 'full'
	},
	{
		path:'site', loadChildren: './site/site.module#SiteModule'
	},
	{
		path:'admin', loadChildren: './admin/admin.module#AdminModule'
	},
	{
		path:'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'
	},
	{
		path:'**', component: Erreur404Component
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
