import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {MyDialogComponent} from '../my-dialog/my-dialog.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  dialogResult = "";

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(){
    let dialogRef = this.dialog.open(MyDialogComponent, {
      width: '600px',
      data: 'This text is passed into the dialog',
    });
    dialogRef.afterClosed().subscribe(result => {//get access to an observable to inform about closing the dialog
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    });
  }

}

