import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule
  ],
  declarations: [LayoutComponent, AccueilComponent, FooterComponent],
  exports: [LayoutComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AdminModule { }
