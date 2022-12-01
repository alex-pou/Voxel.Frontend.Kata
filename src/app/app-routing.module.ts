import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvShowsGridComponent } from './tv-shows/components/grid/tv-shows-grid.component';

const routes: Routes = [
  {
    path: '',
    component: TvShowsGridComponent,
  },
  { path: '**',
    component: TvShowsGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
