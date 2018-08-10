import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
	AuthComponent
  ],
  exports: [
	AuthComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CoreModule { }
