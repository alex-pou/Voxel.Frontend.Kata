import { Component, OnInit } from '@angular/core';
import { IShow } from '../../interfaces/show.interface';
import { TvShowService } from '../../services/tv-show.service';

@Component({
  selector: 'app-tv-shows-grid',
  templateUrl: './tv-shows-grid.component.html',
  styleUrls: ['./tv-shows-grid.component.scss']
})
export class TvShowsGridComponent implements OnInit{

  public shows: IShow[] = [];

  constructor(
    private tvShowsService: TvShowService
  ) { }

  ngOnInit(): void {
    this.tvShowsService.getShows()
    .subscribe(tvShows => {
      this.shows = tvShows.slice(0, 6);
    })
  }

}
