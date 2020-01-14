import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiKey = '2f57ed2b73fa07ffc8c126af72e6d615';

  constructor(private httpClient: HttpClient) { }

  public getPopularMovies() {
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`);
  }
  public getOneMovie(movieId: number) {
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}&language=en-US`)
  }
  public getSimilarMovies(movieId: number) {
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${this.apiKey}&language=en-US&page=1`)
  }
}
