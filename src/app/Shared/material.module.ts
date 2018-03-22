import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule, MatFormFieldModule, MatListModule, MatTableModule,

} from '@angular/material';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableDataSource} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatTableModule,
    MatTableDataSource,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatTableModule,
    MatTableDataSource,
  ]
})
export class MaterialModule { }
