import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movieId: number;
  movie;
  similarMovies;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.getMoreDetails();
    this.getSimilarMovies();
  }

  ngOnInit() { }

  public getMoreDetails(): void {
    this.movieId = Number(this.route.snapshot.paramMap.get('id'));
    this.apiService.getOneMovie(this.movieId).subscribe(
      data => {
        this.movie = data;
        this.movie.poster_path = `https://www.movies123.fr/movies/static/img/original/${this.movie.poster_path}`
      }
    )
  }

  public getSimilarMovies(): void {
    this.apiService.getSimilarMovies(this.movieId).subscribe((data) => {
      this.similarMovies = data;
      this.similarMovies = this.similarMovies.results
      this.similarMovies.forEach(element => {
        element.poster_path = `https://www.movies123.fr/movies/static/img/original/${element.poster_path}`
      });
    });
  }


  public goBack(): void {
    this.location.back();
  }
}
