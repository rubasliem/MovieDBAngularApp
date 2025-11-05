
import { Component, ChangeDetectorRef } from '@angular/core';
import { MovieService } from '../../service/movie-service';
import { IMovies } from '../../interface/imovies';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  constructor(
    private _movieService: MovieService,
  ) {
    this._movieService.getTrendingMovies().subscribe({
      next: (data) => {
        this.trendingMovies = data.results;
        console.log(this.trendingMovies);
      },
      error: (err) => {
        console.log('Error fetching trending movies:', err);
      },
      complete: () => {
        console.log('Successfully fetched trending movies');
      },
    });
  }

  trendingMovies: IMovies[] = [];
  imgPath: string = 'https://image.tmdb.org/t/p/w500/';

  getStars(vote: number): number[] {
    const fullStars = Math.floor(vote / 2);
    return Array(fullStars).fill(0);
  }
}