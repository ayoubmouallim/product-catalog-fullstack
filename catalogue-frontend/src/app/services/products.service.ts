import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public host: String = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  getProducts(page: number, size: number) {
    return this.http.get(this.host + 'products?size=' + size + '&page=' + page);
  }
  getProductsByKeyword(keyword: string, page: number, size: number) {
    return this.http.get(
      this.host +
        'products/search/byDesignationPage?des=' +
        keyword +
        '&size=' +
        size +
        '&page=' +
        page
    );
  }
  // if we use this we have to create it for each ressource
  //  deleteProduct(id: number) {
  //    return this.http.delete(this.host + 'products/' + id);
  //  }

  // we can use this one for all ressources
  deleteRessource(url) {
    return this.http.delete(url);
  }

  save(url: string, product: any) {
    return this.http.post(url, product);
  }

  getRessource(url: string) {
    return this.http.get(url);
  }
  updateRessource(url: string, data: any) {
    return this.http.put(url, data);
  }
}
