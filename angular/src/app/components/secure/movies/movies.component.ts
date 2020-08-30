import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AuthService } from '../../../services/auth.service';
import { Movie } from '../../../interfaces/movie';
import { Category } from '../../../interfaces/category';
import { MoviesState } from '../../../store/movies.reducer';
import { Observable } from 'rxjs';
import { LoadMovieAction } from '../../../store/movies.actions';
import { AppState } from '../../../store/index';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { AddMovieComponent } from '../add-movie/add-movie.component';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  // categories: Category[];
  // categoriesToShow: Category[];
  userName: string;

  dialogRef: MatDialogRef<AddMovieComponent>

  movies$: Observable<Movie[]>;
  loading$: Observable<boolean>;
  error$: Observable<Error>;



  constructor(
    private auth: AuthService,
    private store: Store<AppState>,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.userName = this.auth.getUserName();
    this.store.dispatch(new LoadMovieAction());
    this.movies$ = this.store.pipe(select(store => store.moviesState.list));
    this.loading$ = this.store.pipe(select(store => store.moviesState.loading));
    this.error$ = this.store.pipe(select(store => store.moviesState.error));
  }


  // private _getState() {
  //   this.state = { movies: [], categories: [] };
  //   this.store.pipe(select('movies')).subscribe(res => {
  //     this.state.movies = res['movies'];
  //     this.state.categories = res['categories'];
  //     this.categoriesToShow = [...this._buildCategoriesArrayToShow(this.state)];
  //   });
  // }

  // private _buildCategoriesArrayToShow(state: MoviesState) {
  //   return state.categories.filter((category: Category) => {
  //     return state.movies.some((movie: Movie) => {
  //       return movie.categoryId == category.id;
  //     });
  //   });
  // }

  openDialog() {
    this.dialogRef = this.dialog.open(AddMovieComponent, {
      data: {
        // categories: this.categories$
      },
    });
  }

  goToMoviesPage() {
    this.dialogRef.close('Pizza!');
  }
}
