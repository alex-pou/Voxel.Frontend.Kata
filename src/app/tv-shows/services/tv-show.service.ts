import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IShow } from '../interfaces/show.interface';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  constructor(
    private http: HttpClient
  ) { }

  public getShows(): Observable<IShow[]> {
    return this.http.get<IShow[]>('http://api.tvmaze.com/search/shows?q=house');
  }
}
