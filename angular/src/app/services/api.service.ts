import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Movie } from '../interfaces/movie';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_server_url: string = environment.server_base_url;

  constructor(private httpClient: HttpClient) { }

  getMovies() {
    return this.httpClient.get<Movie[]>(`${this.base_server_url}movies`);
  }

  getCategories() {
    return this.httpClient.get<Category[]>(`${this.base_server_url}categories`);
  }

  addMovie(movie: Movie) {
    return this.httpClient.post<Movie>(`${this.base_server_url}movie`, movie);
  }

  deleteMovie(id: number) {
    return this.httpClient.delete<Movie>(`${this.base_server_url}movie/${id}`);
  }
}