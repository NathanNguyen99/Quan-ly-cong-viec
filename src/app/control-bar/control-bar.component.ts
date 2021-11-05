import { Component, OnInit } from '@angular/core';
import { Todo } from '../Shared/Models/todo.model';
import { DataService } from '../Shared/Services/data.service';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MainPostDetailComponent } from '../main-post-detail/main-post-detail.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {
  faCalendarCheck,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-control-bar',
  templateUrl: './control-bar.component.html',
  styleUrls: ['./control-bar.component.scss']
})
export class ControlBarComponent {

  faCalendarCheck = faCalendarCheck;
  
  closeResult = '';

  constructor(private modalService: NgbModal) {}

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result:any) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason:any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  // todos!: Todo[]
  // showValidationErrors!: boolean

  // constructor(private dataService: DataService, private dialog: MatDialog) { }

  // openDialog() {
  //   this.dialog.open(MainPostDetailComponent);
  // }

  // ngOnInit(): void {
  //   this.todos = this.dataService.getAllTodos()
  // }

  // onFormSubmit(form: NgForm) {   
  //   if (form.invalid) return this.showValidationErrors = true

  //   this.dataService.addTodo(new Todo(form.value.text))

  //   this.showValidationErrors = false
  //   form.reset()
  // }

  // toggleCompleted(todo: Todo) {
  //   todo.completed = !todo.completed;
  // }

  // editTodo(todo: Todo) {
  //   const index = this.todos.indexOf(todo)

  //   let dialogRef = this.dialog.open(MainPostDetailComponent, {
  //     width: '700px',
  //     data: todo
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result) {
  //       this.dataService.updateTodo(index, result)
  //     }
  //   })
  // }

  // deleteTodo(todo: Todo) {
  //   const index = this.todos.indexOf(todo)
  //   this.dataService.deleteTodo(index)
  // }


  


}
