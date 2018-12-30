import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { ExportMaterialModule } from '../export-material/export-material.module';
import { LayoutComponent } from './layout/layout.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    ExportMaterialModule,
    CoreModule
  ],
  declarations: [LayoutComponent, AccueilComponent],
  exports: [LayoutComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AdminModule { }
