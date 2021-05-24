import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: any;
  public size: number = 3;
  public currentPage: number = 0;
  public totalPages: number;
  public pages: Array<number>;
  public currentKeyword: string = '';

  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log('refrech');
    this.onGetProducts();
  }

  onGetProducts() {
    this.productService.getProducts(this.currentPage, this.size).subscribe(
      data => {
        console.log(data);
        this.totalPages = data['page'].totalPages;
        this.pages = new Array<number>(this.totalPages);
        this.products = data['_embedded'].products;
      },
      err => console.log(err)
    );
  }

  onPageProduct(i) {
    this.currentPage = i;
    // this.onGetProducts();
    console.log('salam: ' + this.currentKeyword);
    this.searchProducts();
  }

  onSearch(value: any) {
    this.currentPage = 0;
    this.currentKeyword = value.keyword;
    this.searchProducts();
  }

  searchProducts() {
    this.productService
      .getProductsByKeyword(this.currentKeyword, this.currentPage, this.size)
      .subscribe(
        data => {
          console.log(data);
          this.products = data['_embedded'].products;
          this.totalPages = data['page'].totalPages;
          this.pages = new Array<number>(this.totalPages);
        },
        err => console.log(err)
      );
  }

  onDeleteProduct(product: any) {
    let confirmation = confirm('are you sure you want to delete this ?');
    if (confirmation) {
      this.productService.deleteRessource(product._links.self.href).subscribe(
        data => {
          console.log(product);
          this.onGetProducts();
        },
        err => console.log(err)
      );
    }
  }

  onEditProduct(product) {
    // btoa to crypt in 64bit and atob to decrypt
    this.router.navigateByUrl('/edit-product/' + btoa(product.id));
  }
}
