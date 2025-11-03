import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {

    constructor(private _httpClient:HttpClient){}

  getTrendingMovies(): Observable<any> {
    return this._httpClient.get('https://api.themoviedb.org/3/trending/movie/week?api_key=89ff14c291cd262728fa498371ef8913');
  }
  

  
}
