import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { CompteComponent } from './compte/compte.component';
import { Erreur404Component } from '../core/erreur404/erreur404.component';
import { PagesComponent } from './pages/pages.component';
import { LayoutCoursComponent } from './cours/layout-cours/layout-cours.component';
import { ListCoursComponent } from './cours/list-cours/list-cours.component';
import { NiveauCoursComponent } from './cours/niveau-cours/niveau-cours.component';
import { MatiereCoursComponent } from './cours/matiere-cours/matiere-cours.component';
import { ChapitreCoursComponent } from './cours/chapitre-cours/chapitre-cours.component';
import { ThemeCoursComponent } from './cours/theme-cours/theme-cours.component';
import { ViewCoursComponent } from './cours/view-cours/view-cours.component';

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
        path: 'register', component: RegisterComponent
      },
      {
        path: 'auth', component: CompteComponent
      },
      {
        path: 'cours', component: LayoutCoursComponent,
        children: [
          {path: '', component: ListCoursComponent},
          {path: ':niveau', component: NiveauCoursComponent},
          {path: ':niveau/:matiere', component: MatiereCoursComponent},
          {path: ':niveau/:matiere/:chapitre', component: ChapitreCoursComponent},
          {path: ':niveau/:matiere/:chapitre/:theme', component: ThemeCoursComponent},
        ]
      },
      {
        path: 'page', component: PagesComponent
      },
      {
        path: ':cours', component: ViewCoursComponent
      },
      {
        path: '**', component: Erreur404Component
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
