import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule, MatFormFieldModule, MatGridListModule, MatListModule,  MatTabsModule,

} from '@angular/material';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';


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
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
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
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
  ]
})
export class MaterialModule { }
