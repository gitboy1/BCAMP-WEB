import { Component } from '@angular/core';
import { Globals } from './Shared/globals';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ Globals ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private globals: Globals){}
}
