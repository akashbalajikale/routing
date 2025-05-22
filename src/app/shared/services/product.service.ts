import { Injectable } from '@angular/core';
import { Iproduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
productsArr: Array<Iproduct> = [
    {
      pname: 'Samsung M31',
      pid: "123",
      pstatus: "In-progress",
      canReturn: 1
    },
    {
      pname: 'Samsung TV',
      pid: "124",
      pstatus: "Dispatched",
      canReturn: 1
    },
    {
      pname: 'Iphone',
      pid: "125",
      pstatus: "Delivered",
      canReturn: 0
    }
  ]
  constructor() { }

  fetchAllproduct():Array<Iproduct>{
    return this.productsArr
  }



  getProduct(id : string): Iproduct{
    return this.productsArr.find(prod => prod.pid === id)!
  }
}
