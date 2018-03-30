import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule, MatButtonModule} from '@angular/material';
/*import { tedious  } from '@types/tedious';*/
import { AppComponent } from './app.component';
import {MaterialModule} from './Shared/material.module';
import { MatDialogModule } from '@angular/material';
import {SidenavComponent} from './layout/content/sidenav/sidenav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { DetailTableComponent } from './layout/content/detail-table/detail-table.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PopupComponent } from './popup/popup.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NavbarComponent,
    DetailTableComponent,
    FooterComponent,
    PopupComponent,
    MyDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule
  ],
  entryComponents: [
    MyDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
