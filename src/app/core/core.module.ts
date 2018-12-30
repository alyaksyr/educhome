import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExportMaterialModule } from '../export-material/export-material.module';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { TopnavbarComponent } from './layout/topnavbar/topnavbar.component';
import { FooternavbarComponent } from './layout/footernavbar/footernavbar.component';
import { AdminSidebarComponent } from './layout/sidebar/admin-sidebar/admin-sidebar.component';
import { RootSidebarComponent } from './layout/sidebar/root-sidebar/root-sidebar.component';
import { ClientSidebarComponent } from './layout/sidebar/client-sidebar/client-sidebar.component';
import { ProfsSidebarComponent } from './layout/sidebar/profs-sidebar/profs-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ExportMaterialModule
  ],
  declarations: [
  AuthComponent,
  Erreur404Component,
  BreadcrumbComponent,
  TopnavbarComponent,
  FooternavbarComponent,
  AdminSidebarComponent,
  RootSidebarComponent,
  ClientSidebarComponent,
  ProfsSidebarComponent
  ],
  exports: [
  AuthComponent,
  Erreur404Component,
  TopnavbarComponent,
  FooternavbarComponent,
  AdminSidebarComponent,
  RootSidebarComponent,
  ClientSidebarComponent,
  ProfsSidebarComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CoreModule { }
