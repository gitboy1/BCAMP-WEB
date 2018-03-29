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
  displayedAssetColumns = ['position', 'name', 'serialNum', 'model', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  displayedUserColumns = ['position', 'firstName'/*, 'lastName'*/, 'email', 'location', 'department'];
  userData = USER_DATA;
  displayedPrinterColumns = ['position', 'name', 'serialNum', 'model', 'weight', 'symbol', 'toner'];
  printerData = PRINTER_DATA;
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

export interface Printer {
  name: string;
  serialNum: string;
  model: string;
  position: number;
  weight: string;
  symbol: string;
  toner: string;
}

export interface User {
  position: number;
  firstName: string;
  lastName: string;
  email: string;
  location: string;
  department: string;
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
const USER_DATA: User[] = [
  {position: 1, firstName: 'Zachary', lastName: 'Evans', email: 'Zevans@NewVizProgramming.com', location: 'Missouri Western', department: 'CSMP'},
  {position: 2, firstName: 'John', lastName: 'Carlisle', email: 'JC@NewVizProgramming.com', location: 'Missouri Western', department: 'CSMP'},
  {position: 3, firstName: 'Lisa', lastName: 'Ye', email: 'LYe@NewVizProgramming.com', location: 'Missouri Western', department: 'CSMP'},
  {position: 4, firstName: 'Bad', lastName: 'Assets', email: 'BadAss@NewVizProgramming.com', location: 'Missouri Western', department: 'BASS'},
  {position: 5, firstName: 'Test', lastName: 'User', email: 'test@NewVizProgramming.com', location: 'Missouri Western', department: 'CSMP'},

]


const ELEMENT_DATA: Asset[] = [
  {position: 1, name: 'BC0001', serialNum: '123456ABC', model: 'Probook 650 G3', type: 'laptop', weight: 'ZEvans', symbol: 'Missouri Western'},
  {position: 2, name: 'BC0002', serialNum: '321DALSKD', model: 'Prodesk G3', type: 'PC', weight: 'JCarlisle', symbol: 'Courthouse'},
  {position: 3, name: 'BC0003', serialNum: '1325ASDF', model: 'Inspiron Elite', type: 'laptop', weight: 'LYe', symbol: 'Missouri Western'},
  {position: 5, name: 'BC0005', serialNum: 'AF45D204', model: 'iPad 4', type: 'tablet', weight: 'ZEvans', symbol: 'Missouri Western'},
  {position: 6, name: 'BC0006', serialNum: 'ASDFA54FF', model: 'Probook 650 G3', type: 'laptop', weight: 'JCarlisle', symbol: 'Courthouse'},
  {position: 7, name: 'BC0007', serialNum: 'AASDSDF654', model: 'Probook 650 G3', type: 'laptop', weight: 'BadAssets', symbol: 'Missouri Western'},
  {position: 8, name: 'BC0008', serialNum: 'ASDFJ54654', model: 'ThinkPad T590', type: 'laptop', weight: 'JCarlisle', symbol: 'Missouri Western'},
  {position: 9, name: 'BC0009', serialNum: 'ASDFF5KJ5', model: 'Prodesk 650 G1', type: 'PC', weight: 'ZEvans', symbol: 'Courthouse'},
  {position: 10, name: 'BC0010', serialNum: '3654ASDFD', model: 'ThinkPad T570', type: 'laptop', weight: 'LYe', symbol: 'Missouri Western'},
  {position: 11, name: 'BC0011', serialNum: 'ASD5F4321', model: 'FakeDell Super64x', type: 'laptop', weight: 'LYe', symbol: 'Missouri Western'},


const PRINTER_DATA: Printer[] = [
  {position: 4, name: 'BC0004', serialNum: '19954323ZX', model: 'Konica MFP 6200C', weight: 'BadAssets', symbol: 'Fire Station', toner: 'KX_102MICR'},
  ];
  /*  {position: 1, name: 'BC0001', weight: 'ZEvans', symbol: 'Missouri Western' }*/
];
