import { Component } from '@angular/core';
import { MovieService } from '../../movie-service';
import { IMovies } from '../../imovies';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private _movieService: MovieService) {
    this._movieService.getTrendingMovies().subscribe({
      next: (data) => {this.trendingMovies = data.results; console.log(this.trendingMovies);},
      error: (err) => {console.log('Error fetching trending movies:', err)},
      complete: () => {console.log('Successfully fetched trending movies')}

    });

  }

    trendingMovies:IMovies[] = [];
    imgPath: string = 'https://image.tmdb.org/t/p/w500';
}
