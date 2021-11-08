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
import { Product } from '../Shared/Models/product.model';
import { ProductService } from '../Shared/Services/product.service';
@Component({
  selector: 'app-control-bar',
  templateUrl: './control-bar.component.html',
  styleUrls: ['./control-bar.component.scss']
})
export class ControlBarComponent implements OnInit {

  faCalendarCheck = faCalendarCheck;
  
  closeResult = '';

  product = {
    id: 0,
    name: '',
    fromDate: '',
    toDate: '',
    desc: ''
  }
  edit = true;
  add = false;
  products!: Product[];

  constructor(private modalService: NgbModal, private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  private getProducts() {
    this.productService.getProducts().subscribe(data => this.products = data);
  }

  addProduct() {
    const data = {
      name: this.product.name,
      id: this.product.id,
      fromDate: this.product.fromDate,
      toDate: this.product.toDate,
      desc: this.product.desc,
    };
    this.productService.createProduct(data).subscribe(response => {
      console.log(response)
      this.getProducts();
    });
  }

  setProductEdit(product: Product) {
    this.product.id = product.id;
    this.product.name = product.name;
    this.product.fromDate = product.fromDate;
    this.product.toDate = product.toDate;
    this.product.desc = product.desc;
    this.edit = false;
    this.add = true;
  }

  resetValues() {
    this.product.name = "";
    this.product.id = null;
    this.product.fromDate = "";
    this.product.toDate = "";
    this.product.desc = "";
    this.edit = true;
    this.add = false;
  }

  removeProduct(product: Product) {
    const id = product.id;
    console.log(product)
    this.productService.deleteProduct(id).subscribe(product => console.log(product));
    this.getProducts()
  }

  updateProduct(){
    this.productService.editProduct(this.product).subscribe(response => console.log(response));
    this.getProducts()
    this.resetValues()
  }


  //Below are Dialog controllers
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
