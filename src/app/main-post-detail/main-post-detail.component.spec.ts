import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPostDetailComponent } from './main-post-detail.component';

describe('MainPostDetailComponent', () => {
  let component: MainPostDetailComponent;
  let fixture: ComponentFixture<MainPostDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPostDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
