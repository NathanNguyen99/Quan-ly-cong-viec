import { Component, OnInit } from '@angular/core';
import { DataService } from '../Shared/Services/data.service';
import { FormControl, NgForm } from '@angular/forms';
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
  ngOnInit() {
    this.getProducts();
  }

  private getProducts() {
    this.productService.getProducts().subscribe(data => this.products = data);
  }
  
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

  searchControl: FormControl = new FormControl('');


}
