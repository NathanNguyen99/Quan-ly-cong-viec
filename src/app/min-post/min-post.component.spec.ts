import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinPostComponent } from './min-post.component';

describe('MinPostComponent', () => {
  let component: MinPostComponent;
  let fixture: ComponentFixture<MinPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
