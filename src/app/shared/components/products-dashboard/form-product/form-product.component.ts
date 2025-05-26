import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {
 cricketers = [
    { name: 'Virat Kohli', country: 'India', runs: 12000 },
    { name: 'Joe Root', country: 'England', runs: 10000 },
    { name: 'Babar Azam', country: 'Pakistan', runs: 8000 },
    { name: 'Kane Williamson', country: 'New Zealand', runs: 9500 },
    { name: 'Steve Smith', country: 'Australia', runs: 9200 }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
