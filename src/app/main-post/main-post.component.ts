import { Component,EventEmitter, Output, OnInit, Input } from '@angular/core';
import { NgbDate,NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import {
  faExclamationCircle,
  faComment, faChevronCircleRight, faChevronCircleDown
} from '@fortawesome/free-solid-svg-icons';
import { Product } from '../Shared/Models/product.model';
import { SubProductService } from '../Shared/Services/sub-product.service';
import { subProduct } from '../Shared/Models/subProduct.model';
@Component({
  selector: 'app-main-post',
  templateUrl: './main-post.component.html',
  styleUrls: ['./main-post.component.scss'],
})
export class MainPostComponent {

  @Input() public productItem: Product;
  @Output() public productEdit = new EventEmitter();

  // ---------------------------------
  // Icon
  faExclamationCircle = faExclamationCircle;
  faComment = faComment;
  faChevronCircleRight = faChevronCircleRight;
  faChevronCircleDown = faChevronCircleDown;
  // ---------------------------------
  date!: { year: number; month: number };
  disabled = true;

  fromDate!: NgbDateStruct;
  toDate!: NgbDateStruct;

  
  subproduct = {
    id: '',
    createdAt: '',
    name: '',
    fromDate: '',
    toDate: '',
    totalTask: 0,
    doneTask: 0,
  }
  edit = true;
  add = false;
  subproducts!: subProduct[];

  private getProducts() {
    this.subProduct.getProducts().subscribe(data => this.subproducts = data);
  }

  addProduct() {
    const data = {
      id: this.subproduct.id,
      name: this.subproduct.name,
      createdAt: this.subproduct.createdAt,
      fromDate: this.subproduct.fromDate,
      toDate: this.subproduct.toDate,
      totalTask: this.subproduct.totalTask,
      doneTask: this.subproduct.doneTask,
    };
    this.subProduct.createProduct(data).subscribe(response => {
      console.log(response)
      this.getProducts();
    });
  }

  setProductEdit(subproduct: subProduct) {
    this.subproduct.id = subproduct.id;
    this.subproduct.createdAt = subproduct.createdAt;
    this.subproduct.name = subproduct.name;
    this.subproduct.fromDate = subproduct.fromDate;
    this.subproduct.toDate = subproduct.toDate;
    this.subproduct.totalTask = subproduct.totalTask;
    this.subproduct.doneTask = subproduct.doneTask;
    this.edit = false;
    this.add = true;
  }

  resetValues() {
    this.subproduct.name = "";
    this.subproduct.createdAt = "";
    this.subproduct.id = null;
    this.subproduct.fromDate = "";
    this.subproduct.toDate = "";
    this.subproduct.totalTask = 0;
    this.subproduct.doneTask = 0;
    this.edit = true;
    this.add = false;
  }

  removeProduct(product: subProduct) {
    const id = product.id;
    console.log(product)
    this.subProduct.deleteProduct(id).subscribe(subproduct => console.log(subproduct));
    this.getProducts()
  }

  updateProduct(){
    this.subProduct.editProduct(this.subproduct).subscribe(response => console.log(response));
    this.getProducts()
    this.resetValues()
  }

  // ---------------------------------
  //StartDate format for ngbdatepicker
  obj = {
    year: 0,
    month: 0,
    day: 0
  }
  startDateOfFromDate() {
    var newFromDate = this.productItem.fromDate.split("/");
    return this.obj = {
      year: parseInt(newFromDate[2]),
      month: parseInt(newFromDate[1]),
      day: parseInt(newFromDate[0])
    }
  }
  startDateOfToDate() {
    var newFromDate = this.productItem.toDate.split("/");
    return this.obj = {
      year: parseInt(newFromDate[2]),
      month: parseInt(newFromDate[1]),
      day: parseInt(newFromDate[0])
    }
  }
  // ---------------------------------

  constructor(private modalService: NgbModal, private subProduct: SubProductService) {}

  public updateMyDate() {
    this.productEdit.emit(this.productItem);
  }


  // Function to calculate days left
  calculateDiff() {
    if(this.fromDate == null || this.toDate == null) {
      return "Không"
    }
    var admission = moment(this.fromDate, 'DD-MM-YYYY');
    var discharge = moment(this.toDate, 'DD-MM-YYYY');
    return discharge.diff(admission, 'days');
  }

  public shoud_open = false;

  openChildComponent(){
    this.shoud_open = !this.shoud_open;
  }
  

  ngOnInit(): void {this.getProducts();}
}
