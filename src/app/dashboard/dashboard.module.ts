import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './footer/footer.component';
import { CoreModule } from '../core/core.module';
import { ExportMaterialModule } from '../export-material/export-material.module';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { EleveComponent } from './eleve/eleve.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    CoreModule,
    ExportMaterialModule,
  ],
  declarations: [LayoutComponent, AccueilComponent, FooterComponent, EnseignantComponent, EleveComponent, ParentComponent],
  exports: [LayoutComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DashboardModule { }
