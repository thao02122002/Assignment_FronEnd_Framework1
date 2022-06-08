import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[]
  constructor(private productService: ProductService) {
    this.products= []
   }

  ngOnInit(): void {
    this.onGetList()
  }
  onGetList(){
    this.productService.getProducts().subscribe((data) => {
      this.products = data
    })
  }

}
