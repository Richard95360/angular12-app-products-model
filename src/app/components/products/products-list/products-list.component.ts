import { Observable } from 'rxjs';
import { AppDataState } from '../../../state/product.state';
import { Product } from '../../../model/product.model';
import { ProductActionsTypes, ActionEvent } from '../../../state/product.state';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DataStateEnum } from '../../../state/product.state'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {

  @Input() productsInput$:Observable<AppDataState<Product[]>>|null=null;


  @Output() productEventEmitter:EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();

  readonly DataStateEnum=DataStateEnum;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(p:Product){
    this.productEventEmitter.emit({
      type:ProductActionsTypes.SELECT_PRODUCT,payload:p
    });

  }

  onDelete(p:Product){
    this.productEventEmitter.emit({
      type:ProductActionsTypes.DELETE_PRODUCT,payload:p
    });
  }

  onEdit(p:Product){
    this.productEventEmitter.emit({
      type:ProductActionsTypes.EDIT_PRODUCT,payload:p
    });
  }

  onActionEvent($event:ActionEvent){
     this.productEventEmitter.emit($event)
  }

}
