import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*import { tedious  } from '@types/tedious';*/
import * as data from '../server/registration.json';


import { AppComponent } from './app.component';
import {MaterialModule} from './Shared/material.module';
import {SidenavComponent} from './layout/content/sidenav/sidenav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { DetailTableComponent } from './layout/content/detail-table/detail-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NavbarComponent,
    DetailTableComponent,
    data,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    data,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
