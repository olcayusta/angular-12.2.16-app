import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Movie} from "../models/movie.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  API_KEY = '7874421c15feb9f755f79c4fd476d273'

  constructor(private http: HttpClient) {
  }

  getMovies(collection: string): Observable<Movie[]> {
    return this.http.get<{ results: Movie[] }>(`https://api.themoviedb.org/3/movie/${collection}?api_key=${this.API_KEY}&language=tr-TRS&page=1`)
      .pipe(
        map(({results}) => results)
      )
  }
}
