import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public movies;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getPopularMovies().subscribe((data) => {
      this.movies = data;
      this.movies = this.movies.results
      this.movies.forEach(element => {
        element.poster_path = `https://www.movies123.fr/movies/static/img/original/${element.poster_path}`
      });
    });
  }

}
