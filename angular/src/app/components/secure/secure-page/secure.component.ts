import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Movie } from '../../../interfaces/movie';
import { Category } from 'src/app/interfaces/category';
import { forkJoin } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {

  userName: string;
  movies: Movie[];
  categories: Category[];
  categoriesToShow: Category[];

  constructor(private api: ApiService,
    private auth: AuthService) { }

  ngOnInit() {
    this.userName = this.auth.userName;
    this._getMoviesAndCategories();
  }

  deleteMovie(e: Movie) {
    this.api.deleteMovie(e.id).subscribe(
      () => {
        const indexOfDeletedMovie = this.movies.findIndex(movie => movie.id == e.id);
        if (indexOfDeletedMovie != -1) {
          this.movies.splice(indexOfDeletedMovie, 1);
          this._deleteCategortToShow(e);
        }
      },
      (err) => {
        alert('אירעה שגיאה, יש לנסות בשנית מאוחר יותר');
      });
  }

  addMovie(e: Movie) {
    this.api.addMovie(e).subscribe(
      (res: Movie) => {
        this.movies = [...this.movies, { ...res }];
        this._addCategoryToShow(e);
        this.api.addMovieServerRes.emit(res);
      },
      (err) => {
        this.api.addMovieServerRes.emit(err);
      });
  }

  private _getMoviesAndCategories() {
    forkJoin([this.api.getMovies(), this.api.getCategories()])
      .subscribe(
        (res: any) => {
          this.movies = [...res[0]];
          this.categories = [...res[1]];
          this.categoriesToShow = [...this._buildCategoriesArrayToShow(this.movies, this.categories)];
        },
        () => {
          alert('אירעה שגיאה, יש לנסות בשנית מאוחר יותר');
        });
  }

  private _buildCategoriesArrayToShow(movies: Movie[], categories: Category[]) {
    return categories.filter((category: Category) => {
      return movies.some((movie: Movie) => {
        return movie.categoryId == category.id;
      });
    });
  }

  private _addCategoryToShow(movie: Movie) {
    const categoryToAdd = this.categoriesToShow.find(category => category.id !== movie.categoryId);
    if (categoryToAdd) {
      const findCategory = this.categories.find(category => category.id == categoryToAdd.id);
      if (findCategory)
        this.categoriesToShow = [...this.categoriesToShow, { ...findCategory }];
    }
  }

  private _deleteCategortToShow(movieToDelete: Movie) {
    const categoryToDelete = this.categoriesToShow.findIndex(category => category.id === movieToDelete.categoryId);
    if (categoryToDelete != -1) {
      const checkCategoryInOtherMovies = this.movies.find(movie => movie.categoryId == movieToDelete.categoryId);
      if (!checkCategoryInOtherMovies)
        this.categoriesToShow.splice(categoryToDelete, 1);
    }
  }
}


