import { NgModule } from '@angular/core';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatButtonModule,
  MatCardModule, 
  MatCheckboxModule,
  MatChipsModule, 
  MatDialogModule, 
  MatDividerModule,
  MatExpansionModule, 
  MatFormFieldModule, 
  MatGridListModule,
  MatIconModule, 
  MatInputModule,
  MatListModule, 
  MatOptionModule, 
  MatSelectModule,
  MatSidenavModule, 
  MatSnackBarModule, 
  MatTabsModule,
  MatToolbarModule,
  MatButtonToggleModule
} from '@angular/material';

@NgModule({
  imports: [
  	MatButtonModule,
  	MatCardModule, 
 	MatCheckboxModule,
  	MatChipsModule, 
  	MatDialogModule, 
  	MatDividerModule,
  	MatExpansionModule, 
  	MatFormFieldModule, 
  	MatGridListModule,
  	MatIconModule, 
  	MatInputModule,
  	MatListModule, 
  	MatOptionModule, 
  	MatSelectModule,
  	MatSidenavModule, 
  	MatSnackBarModule, 
  	MatTabsModule,
  	MatToolbarModule,
  	MatButtonToggleModule
  ],
  declarations: [],

  exports: [
  	MatButtonModule,
  	MatCardModule, 
 	MatCheckboxModule,
  	MatChipsModule, 
  	MatDialogModule, 
  	MatDividerModule,
  	MatExpansionModule, 
  	MatFormFieldModule, 
  	MatGridListModule,
  	MatIconModule, 
  	MatInputModule,
  	MatListModule, 
  	MatOptionModule, 
  	MatSelectModule,
  	MatSidenavModule, 
  	MatSnackBarModule, 
  	MatTabsModule,
  	MatToolbarModule,
  	MatButtonToggleModule
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}]
})
export class ExportMaterialModule { }
