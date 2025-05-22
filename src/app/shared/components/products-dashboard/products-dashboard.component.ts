import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.scss']
})
export class ProductsDashboardComponent implements OnInit {
 productData !: Array<Iproduct>


  constructor(
    private _productService : ProductService
  ) { }

  ngOnInit(): void {
    this.productData = this._productService.fetchAllproduct()
  }

}
