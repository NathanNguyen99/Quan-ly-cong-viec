import { Component,EventEmitter, Output, OnInit, Input } from '@angular/core';
import { NgbDate,NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import {
  faExclamationCircle,
  faComment, faChevronCircleRight, faChevronCircleDown
} from '@fortawesome/free-solid-svg-icons';
import { Product } from '../Shared/Models/product.model';
import { Product as ProductTest } from '../Shared/Models/product';
import { SubProductService } from '../Shared/Services/sub-product.service';
import { subProduct } from '../Shared/Models/subProduct.model';
import { ProductService } from '../Shared/Services/product.service';
import { Observable } from 'rxjs';
import { ProductQuery } from '../Shared/Services/product.query';
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

  article$: Observable<Product>;
  articleId: string;

  constructor(private modalService: NgbModal, private subProduct: SubProductService, private _productTest: ProductService, private _productQuery: ProductQuery) {}

  ngOnInit(): void {this.getProducts();
    
  }

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
  
  //Change in main-post, remove all the test file
  //Replace subproduct -> subproductstest
}
