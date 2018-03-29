import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  showSide = false;
  filters = [
    {value: 'laptop-0', viewValue: 'Laptops'},
    {value: 'desktop-1', viewValue: 'Desktops'},
    {value: 'tablet-2', viewValue: 'Tablets'},
    // {value: 'pc-3', viewValue: 'Network Switches'},
    // {value: 'fire-4', viewValue: 'Fire Suppression'},
    // {value: 'fiber-5', viewValue: 'Fibers'},
    // {value: 'phone-6', viewValue: 'Phones'},
    // {value: 'backup-5', viewValue: 'Backup Servers'},
    // {value: 'physical-5', viewValue: 'Physical Servers'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
