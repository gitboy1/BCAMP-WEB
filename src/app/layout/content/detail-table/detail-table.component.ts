import {Component} from '@angular/core';
import {Globals} from '../../../Shared/globals';
import {MatTableDataSource} from '@angular/material';
import * as data from '../../../../server/registration.json';

@Component({
  selector: 'app-detail-table',
  templateUrl: './detail-table.component.html',
  providers: [Globals],
  styleUrls: ['./detail-table.component.css']
})

export class DetailTableComponent {
  displayedColumns = ['position', 'name', 'serialNum', 'model', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}

/*export interface Asset {
  id: number;
  assetId: string;
  serialNum: string;
  userId: string;
  location: string;
  type: string;
  productNum: string;
  ram: number;
  hdType: string;
  hdSize: string;
  cost: number;
  warranty: string;
  model: string;
  brand: string;
  toner: string;
}*/

export interface Asset {
  name: string;
  serialNum: string;
  model: string;
  type: string;
  position: number;
  weight: string;
  symbol: string;
}


/*const ELEMENT_DATA: Asset[] = [
  {
    id: 1,
    assetId: 'BC0001',
    serialNum: 'AB123C342',
    userId: 'ZEvans',
    location: 'Missouri Western',
    type: 'laptop',
    productNum: 'PC10AX91',
    ram: 8,
    hdType: 'SSD',
    hdSize: 256,
    cost: 1500.73,
    warranty: '01/01/2021',
    model: 'Prodesk G3',
    brand: 'HP',
    toner: null
},
  {
    id: 2,
    assetId: 'BC0002',
    serialNum: '321DALSKD',
    userId: 'ZEvans',
    location: 'Missouri Western',
    type: 'laptop',
    productNum: 'PC10AX91',
    ram: 8,
    hdType: 'SSD',
    hdSize: 256,
    cost: 1500.73,
    warranty: '01/01/2021',
    model: 'Prodesk G3',
    brand: 'HP',
    toner: null
  },
  {
    id: 3,
    assetId: 'BC0003',
    serialNum: '1325ASDF',
    userId: 1,
    location: 'Missouri Western',
    type: 'Laptop',
    productNum: 'PCab1254',
    ram: 32,
    hdType: 'SSD',
    hdSize: 512,
    cost: 2500.73,
    warranty: '01/01/2021',
    model: 'Inspiron Elite',
    brand: 'Dell',
    toner: null
  },
];*/

const ELEMENT_DATA: Asset[] = [
  {position: 1, name: 'BC0001', serialNum: '123456ABC', model: 'Probook 650 G3', type: 'laptop', weight: 'ZEvans', symbol: 'Missouri Western'},
  {position: 2, name: 'BC0002', serialNum: '321DALSKD', model: 'Prodesk G3', type: 'PC', weight: 'JCarlisle', symbol: 'Courthouse'},
  {position: 3, name: 'BC0003', serialNum: '1325ASDF', model: 'Inspiron Elite', type: 'laptop', weight: 'LYe', symbol: 'Missouri Western'},
  {position: 4, name: 'BC0004', serialNum: '19954323ZX', model: 'Konica MFP 6200C', type: 'Printer', weight: 'BadAssets', symbol: 'Fire Station'},
  {position: 5, name: 'BC0005', serialNum: 'AF45D204', model: 'iPad 4', type: 'tablet', weight: 'ZEvans', symbol: 'Missouri Western'},
  {position: 6, name: 'BC0006', serialNum: 'ASDFA54FF', model: 'Probook 650 G3', type: 'laptop', weight: 'JCarlisle', symbol: 'Courthouse'},
  {position: 7, name: 'BC0007', serialNum: 'AASDSDF654', model: 'Probook 650 G3', type: 'laptop', weight: 'BadAssets', symbol: 'Missouri Western'},
  {position: 8, name: 'BC0008', serialNum: 'ASDFJ54654', model: 'ThinkPad T590', type: 'laptop', weight: 'JCarlisle', symbol: 'Missouri Western'},
  {position: 9, name: 'BC0009', serialNum: 'ASDFF5KJ5', model: 'Prodesk 650 G1', type: 'PC', weight: 'ZEvans', symbol: 'Courthouse'},
  {position: 10, name: 'BC0010', serialNum: '3654ASDFD', model: 'ThinkPad T570', type: 'laptop', weight: 'LYe', symbol: 'Missouri Western'},
  {position: 11, name: 'BC0011', serialNum: 'ASD5F4321', model: 'FakeDell Super64x', type: 'laptop', weight: 'LYe', symbol: 'Missouri Western'},

  /*  {position: 1, name: 'BC0001', weight: 'ZEvans', symbol: 'Missouri Western' }*/
];


/*const ELEMENT_DATA: Element[] = [
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];*/
