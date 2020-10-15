import { Component, OnInit, Input } from '@angular/core';

import { environment } from '../../../../environments/environment';
import { Movie, DialogData } from '../../../interfaces/movie';
import { AddEditMovieComponent } from '../add-edit-movie/add-edit-movie.component';

import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { WrappingDialogComponent } from '../wrapping-dialog/wrapping-dialog.component';


@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})

export class MovieItemComponent implements OnInit {

  @Input() movie: Movie;
  dialogRef: MatDialogRef<WrappingDialogComponent>;
  imgToShow: string;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.imgToShow = this.movie.imgUrl
  }

  updateImgUrl(e) {
    this.imgToShow = '../../' + environment.defaultImgToShow;
  }

  opendDialog(edit) {
    edit = edit || false;
    const data: DialogData = {
      movie: { ... this.movie },
      edit
    };
    
    this.dialogRef = this.dialog.open(WrappingDialogComponent, { data });
  }
}
