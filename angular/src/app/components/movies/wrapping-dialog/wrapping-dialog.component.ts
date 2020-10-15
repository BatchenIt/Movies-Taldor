import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../../../interfaces/movie';

@Component({
  selector: 'app-wrapping-dialog',
  templateUrl: './wrapping-dialog.component.html',
  styleUrls: ['./wrapping-dialog.component.css']
})

export class WrappingDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit() {
  }

}
