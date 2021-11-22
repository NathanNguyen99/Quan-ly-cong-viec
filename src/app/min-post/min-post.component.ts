import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import {
  faChevronCircleRight,
  faChevronCircleDown,
} from '@fortawesome/free-solid-svg-icons';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
import { Observable, combineLatest } from 'rxjs';
import { FilterState } from '../Shared/filter.store';
import { Task, TaskStatus, TaskStatusColors, TaskStatusDisplay } from '../Shared/Models/task.model';
import { FilterQuery } from '../Shared/Services/filter.query';
import { ProductQuery } from '../Shared/Services/product.query';
import { ProductService } from '../Shared/Services/product.service';
import { TaskUtil } from '../utils/task';

@Component({
  selector: '[app-min-post]',
  templateUrl: './min-post.component.html',
  styleUrls: ['./min-post.component.scss'],
})

@UntilDestroy()
export class MinPostComponent implements OnInit {
  faChevronCircleRight = faChevronCircleRight;
  faChevronCircleDown = faChevronCircleDown;

  public getDoneTask_open = false;

  getDoneTask_openFunc() {
    this.getDoneTask_open = !this.getDoneTask_open;
  }

  TaskStatusDisplay = TaskStatusDisplay;
  TaskStatusColors = TaskStatusColors;

  @Input() status: TaskStatus;
  //
  @Input() tasks$: Observable<Task[]>;
  @Input() currentUserId: string;
  tasks: Task[] = [];
  constructor(private _productService: ProductService, private _filterQuery: FilterQuery) {}

  ngOnInit(): void {
    combineLatest([this.tasks$, this._filterQuery.all$])
      .pipe(untilDestroyed(this))
      .subscribe(([issues, filter]) => {
        this.tasks = this.filterIssues(issues, filter);
      });
  }

  get tasksCount(): number {
    return this.tasks.length;
  }

  drop(event: CdkDragDrop<Task[]>) {
    const newTask: Task = { ...event.item.data };
    const newTasks = [...event.container.data];
    if (event.previousContainer === event.container) {
      moveItemInArray(newTasks, event.previousIndex, event.currentIndex);
      this.updateListPosition(newTasks);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        newTasks,
        event.previousIndex,
        event.currentIndex
      );
      this.updateListPosition(newTasks);
      newTask.status = event.container.id as TaskStatus;
      this._productService.updateTask(newTask);
    }
  }

  private updateListPosition(newList: Task[]) {
    newList.forEach((issue, idx) => {
      const newIssueWithNewPosition = { ...issue, listPosition: idx + 1 };
      this._productService.updateTask(newIssueWithNewPosition);
    });
  }

  filterIssues(tasks: Task[], filter: FilterState): Task[] {
    const { onlyMyIssue, ignoreResolved, searchTerm, userIds } = filter;
    return tasks.filter((task) => {
      const isMatchTerm = searchTerm ? TaskUtil.searchString(task.name, searchTerm) : true;

      const isIncludeUsers = userIds.length
        ? task.userIds.some((userId) => userIds.includes(userId))
        : true;

      const isMyIssue = onlyMyIssue
        ? this.currentUserId && task.userIds.includes(this.currentUserId)
        : true;

      const isIgnoreResolved = ignoreResolved ? task.status !== TaskStatus.DONE : true;

      return isMatchTerm && isIncludeUsers && isMyIssue && isIgnoreResolved;
    }); 
  }
}
