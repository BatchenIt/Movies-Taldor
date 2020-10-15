import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrappingDialogComponent } from './wrapping-dialog.component';

describe('WrappingDialogComponent', () => {
  let component: WrappingDialogComponent;
  let fixture: ComponentFixture<WrappingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrappingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrappingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
