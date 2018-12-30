import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SiteModule } from './site/site.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { MatToolbarModule, 
         MatButtonModule, 
         MatSidenavModule, 
         MatIconModule, 
         MatListModule, 
         MatGridListModule, 
         MatCardModule, 
         MatMenuModule } from '@angular/material';
import { RegisterService } from './core/services/auth/register.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    RouterModule,
	  SiteModule,
	  DashboardModule,
	  AdminModule,
	  SharedModule,
	  CoreModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
