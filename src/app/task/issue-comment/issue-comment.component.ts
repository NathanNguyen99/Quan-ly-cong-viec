import { Component, Input, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Comment } from '../../Shared/Models/comment';
import { User } from 'src/app/Shared/Models/user';
import { AuthQuery } from 'src/app/Auth/auth.query';
import { ProductService } from 'src/app/Shared/Services/product.service';

@Component({
  selector: 'issue-comment',
  templateUrl: './issue-comment.component.html',
  styleUrls: ['./issue-comment.component.scss']
})
@UntilDestroy()
export class IssueCommentComponent implements OnInit {
  @Input() issueId: string;
  @Input() comment: Comment;
  @Input() createMode: boolean;
  @ViewChild('commentBoxRef') commentBoxRef: ElementRef;
  commentControl: FormControl;
  user: User;
  isEditing: boolean;

  constructor(
    private _authQuery: AuthQuery,
    private productService: ProductService
  ) {}

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (!this.createMode || this.isEditing) {
      return;
    }
    if (event.key === 'M') {
      this.commentBoxRef.nativeElement.focus();
      this.isEditing = true;
    }
  }

  ngOnInit(): void {
    this.commentControl = new FormControl('');
    this._authQuery.user$.pipe(untilDestroyed(this)).subscribe((user) => {
      this.user = user;
      if (this.createMode) {
        this.comment = new Comment(this.issueId, this.user);
      }
    });
  }

  setCommentEdit(mode: boolean) {
    this.isEditing = mode;
  }

  addComment() {
    const now = new Date();
    this.productService.updateTaskComment(this.issueId, {
      ...this.comment,
      id: `${now.getTime()}`,
      createdAt: now.toISOString(),
      updatedAt: now.toISOString(),
      body: this.commentControl.value
    });
    this.cancelAddComment();
  }

  cancelAddComment() {
    this.commentControl.patchValue('');
    this.setCommentEdit(false);
  }
}
