import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AuthService } from '../../../services/auth.service';
import { Movie } from '../../../interfaces/movie';
import { Category } from '../../../interfaces/category';
import { State } from '../../../store/movies.reducer';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  state: State;
  categories: Category[];
  categoriesToShow: Category[];
  addMoviePage = false;
  userName: string;

  constructor(private auth: AuthService,
    private store: Store<State>) {
    this._getState();
  }

  ngOnInit() {
    this.userName = this.auth.getUserName();
  }

  private _getState() {
    this.state = { movies: [], categories: [] };
    this.store.pipe(select('movies')).subscribe(res => {
      this.state.movies = res['movies'];
      this.state.categories = res['categories'];
      this.categoriesToShow = [...this._buildCategoriesArrayToShow(this.state)];
    });
  }

  private _buildCategoriesArrayToShow(state: State) {
    return state.categories.filter((category: Category) => {
      return state.movies.some((movie: Movie) => {
        return movie.categoryId == category.id;
      });
    });
  }

  openAddMoviePage() {
    this.addMoviePage = true;
  }

  goToMoviesPage() {
    this.addMoviePage = false;
  }
}
