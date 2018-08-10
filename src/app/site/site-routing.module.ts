import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
	{
    path: '', component: LayoutComponent, children: [
      {
        path: '', component: AccueilComponent
      },
      {
        path: 'login', component: AuthComponent
      },
      {
        path: 'Register', component: RegisterComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
