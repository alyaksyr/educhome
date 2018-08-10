import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './site/accueil/accueil.component';

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
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
