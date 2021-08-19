import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Alert } from '../../models/alert';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  alert = {
    title: "Attention",
    description: "Do you really wanna proceed?",
    okBtn: "Proceed",
    cancelBtn: "Cancel",
    hasCancelBtn: true

  };

  constructor(public dialogRef: MatDialogRef<AlertComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Alert) { }

  ngOnInit(): void {

    if(this.data) {
      this.alert = {...this.alert ,...this.data}

    }
  }

}
