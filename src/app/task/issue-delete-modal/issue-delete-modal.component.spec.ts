import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueDeleteModalComponent } from './issue-delete-modal.component';

describe('IssueDeleteModalComponent', () => {
  let component: IssueDeleteModalComponent;
  let fixture: ComponentFixture<IssueDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueDeleteModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
