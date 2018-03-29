import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*import { tedious  } from '@types/tedious';*/
import { AppComponent } from './app.component';
import {MaterialModule} from './Shared/material.module';
import {SidenavComponent} from './layout/content/sidenav/sidenav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { DetailTableComponent } from './layout/content/detail-table/detail-table.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NavbarComponent,
    DetailTableComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
