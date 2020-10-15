import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMovieComponent } from './delete-movie.component';

describe('DeleteMovieComponent', () => {
  let component: DeleteMovieComponent;
  let fixture: ComponentFixture<DeleteMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
