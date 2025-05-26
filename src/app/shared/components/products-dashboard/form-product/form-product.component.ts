import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {
 
  @ViewChild("stdform") stdform !: NgForm;

  constructor(
    
  ) { }

  ngOnInit(): void {
  }

  OnStdAdd(){
    if(this.stdform.valid){
      let stdObj : any = this.stdform.value;
       
     
      
      stdObj.isActive = this.stdform.value.isActive === "Yes" ? true : false;
      console.log(stdObj);
      
      this.stdform.reset()
    
       
      
    }
  }


}
