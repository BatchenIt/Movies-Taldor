import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { AddEditMovieComponent } from '../movies/add-edit-movie/add-edit-movie.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {

  // mobileQuery: MediaQueryList;
  // private _mobileQueryListener: () => void;

  constructor(
    // changeDetectorRef: ChangeDetectorRef,
    // media: MediaMatcher,
    public dialog: MatDialog
  ) {
    // this.mobileQuery = media.matchMedia('(max-width: 600px)');
    // this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }

  openAddMovieDialog() {
    this.dialog.open(AddEditMovieComponent);
  }

  ngOnDestroy(): void {
    // this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
