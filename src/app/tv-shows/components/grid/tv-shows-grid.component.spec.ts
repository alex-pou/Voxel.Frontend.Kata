import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { TvShowService } from '../../services/tv-show.service';
import { TvShowsGridComponent } from './tv-shows-grid.component';

const expectedResponse = [{
  title: 'title1',
  rating: 'rating1',
  image: 'image1'
},
{
  title: 'title2',
  rating: 'rating2',
  image: 'image2'
},
{
  title: 'title3',
  rating: 'rating3',
  image: 'image3'
},
{
  title: 'title4',
  rating: 'rating4',
  image: 'image4'
},
{
  title: 'title5',
  rating: 'rating5',
  image: 'image5'
},
{
  title: 'title6',
  rating: 'rating6',
  image: 'image6'
}];

describe('TvShowsGridComponent should', () => {
  let component: TvShowsGridComponent;
  let fixture: ComponentFixture<TvShowsGridComponent>;
  let tvShowsService: TvShowService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [TvShowsGridComponent],
      providers: [TvShowService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TvShowsGridComponent);
    component = fixture.componentInstance;
    tvShowsService = fixture.debugElement.injector.get(TvShowService);
    fixture.detectChanges();
  });

  it('create', () => {
    expect(component).toBeTruthy();
  });

  it('only render six tv shows', () => {
    spyOn(tvShowsService, 'getShows').and.returnValue(of(expectedResponse));

    component.ngOnInit();
    fixture.detectChanges();

    expect(component.shows.length).toBe(6);
  })

  it('render title, image and rating for each show', () => {
    spyOn(tvShowsService, 'getShows').and.returnValue(of(expectedResponse));

    component.ngOnInit();
    fixture.detectChanges();

    const showTitles = fixture.debugElement.queryAll(By.css('.show-title'));
    const showImages = fixture.debugElement.queryAll(By.css('.show-image'));
    const showRatings = fixture.debugElement.queryAll(By.css('.show-rating'));

    expect(showTitles.length).toBe(6);
    expect(showImages.length).toBe(6);
    expect(showRatings.length).toBe(6);

  })
});
