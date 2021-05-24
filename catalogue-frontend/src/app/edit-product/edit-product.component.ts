import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  public product: any;
  constructor(
    private activatedRouter: ActivatedRoute,
    private productService: ProductsService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log(atob(this.activatedRouter.snapshot.params.id));
    this.productService
      .getRessource(
        'http://localhost:8080/products/' +
          atob(this.activatedRouter.snapshot.params.id)
      )
      .subscribe(
        resp => {
          console.log('salam', resp);
          this.product = resp;
        },
        err => console.log(err)
      );
  }

  onUpdateProduct(data: any) {
    this.productService
      .updateRessource(
        'http://localhost:8080/products/' + this.product.id,
        this.product
      )
      .subscribe(
        resp => {
          console.log('updated', resp);
          this.router.navigateByUrl('/products');
        },
        err => console.log(err)
      );
  }
}
