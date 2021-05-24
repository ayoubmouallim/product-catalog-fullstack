import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { NgForm } from '@angular/forms';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  // NgForm = NgForm; //this one solve my problem...initialization and declaration
  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}
  ngOnInit() {}

  onSubmitForm(formData: any) {
    //    console.log(formData);
    this.productService
      .save(this.productService.host + 'products/', {
        designation: formData.name,
        price: formData.price,
        quantity: formData.qte
      })
      .subscribe(
        resp => {
          console.log(resp);
          this.router.navigateByUrl('/products');
        },
        err => console.log(err)
      );
  }
}
