import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from "rxjs";
import {Movie} from "../../models/movie.model";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class MoviesComponent implements OnInit {
  @Input() shelfTitle!: string;
  @Input() collection!: string;

  movies$!: Observable<Movie[]>;

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movies$ = this.movieService.getMovies(this.collection);
  }

}
