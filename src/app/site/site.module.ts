import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExportMaterialModule } from '../export-material/export-material.module';
import { SiteRoutingModule } from './site-routing.module';
import { CoreModule } from '../core/core.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RegisterComponent } from './register/register.component';
import { LayoutComponent } from './layout/layout.component';
import { CompteComponent } from './compte/compte.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { PagesComponent } from './pages/pages.component';
import { CrumbComponent } from './variables/crumb/crumb.component';
import { LayoutCoursComponent } from './cours/layout-cours/layout-cours.component';
import { ListCoursComponent } from './cours/list-cours/list-cours.component';
import { CoursComponent } from './cours/cours/cours.component';
import { NiveauCoursComponent } from './cours/niveau-cours/niveau-cours.component';
import { MatiereCoursComponent } from './cours/matiere-cours/matiere-cours.component';
import { ChapitreCoursComponent } from './cours/chapitre-cours/chapitre-cours.component';
import { ThemeCoursComponent } from './cours/theme-cours/theme-cours.component';
import { SidebarComponent } from './variables/sidebar/sidebar.component';
import { SideboxComponent } from './variables/sidebox/sidebox.component';
import { FiltreCoursComponent } from './variables/filtre-cours/filtre-cours.component';
import { ViewCoursComponent } from './cours/view-cours/view-cours.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from '../core/services/auth/register.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    SiteRoutingModule,
    RouterModule,
    CoreModule,
    ExportMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
  	ToolbarComponent, 
  	FooterComponent, 
  	AuthComponent,
  	AccueilComponent, 
  	RegisterComponent, 
  	LayoutComponent, CompteComponent, EnseignantComponent, PagesComponent, CrumbComponent, 
    LayoutCoursComponent, ListCoursComponent, CoursComponent, NiveauCoursComponent, MatiereCoursComponent, 
    ChapitreCoursComponent, ThemeCoursComponent, SidebarComponent, SideboxComponent, FiltreCoursComponent, ViewCoursComponent
  ],
  
  exports: [LayoutComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SiteModule { }
