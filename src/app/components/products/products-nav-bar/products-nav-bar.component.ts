import { Component, OnInit,EventEmitter, Output  } from '@angular/core';
import { ProductActionsTypes, ActionEvent } from '../../../state/product.state';


@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  @Output() productEventEmitter:EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  onGetAllProducts(){
     this.productEventEmitter.emit({type:ProductActionsTypes.GET_ALL_PRODUCTS});
  }

  onGetSelectedProducts(){
    this.productEventEmitter.emit({type:ProductActionsTypes.GET_SELECTED_PRODUCTS});
  }

  onGetAvailableProducts(){
    this.productEventEmitter.emit({type:ProductActionsTypes.GET_AVAILABLE_PRODUCTS});
  }
  onNewProducts(){
    this.productEventEmitter.emit({type:ProductActionsTypes.NEW_PRODUCT});
  }
  onSearch(dataForm:any){
    this.productEventEmitter.emit(
      {type:ProductActionsTypes.SEARCH_PRODUCTS,payload:dataForm}
      );
  }

}