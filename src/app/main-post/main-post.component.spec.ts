import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPostComponent } from './main-post.component';

describe('MainPostComponent', () => {
  let component: MainPostComponent;
  let fixture: ComponentFixture<MainPostComponent>;

  const onDoing = "#2BD9FE"

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
