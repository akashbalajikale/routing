import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { Iproduct } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
 prodId !: string
 producd !: Iproduct
  constructor(
    private _routes : ActivatedRoute,
    private _productService : ProductService
  ) { }

  ngOnInit(
  ): void {
    // console.log(this._routes.snapshot.params['pid']);
  this.prodId = this._routes.snapshot.params['pid']

  this.producd = this._productService.getProduct(this.prodId)
    
  }

}
