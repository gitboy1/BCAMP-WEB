import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  showSide = false;
  filters = [
    {value: 'printer-0', viewValue: 'Printers'},
    {value: 'keyboard-1', viewValue: 'Laptops'},
    {value: 'tablet-2', viewValue: 'Tablet'},
    // {value: 'pc-3', viewValue: 'Network Switches'},
    // {value: 'fire-4', viewValue: 'Fire Suppression'},
    // {value: 'fiber-5', viewValue: 'Fibers'},
    // {value: 'phone-6', viewValue: 'Phones'},
    // {value: 'backup-5', viewValue: 'Backup Servers'},
    // {value: 'physical-5', viewValue: 'Physical Servers'},
  ];
  toggleSide(): void {
    this.showSide = !this.showSide;
  }

  constructor() { }

  ngOnInit() {
  }

}
