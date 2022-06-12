import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent implements OnInit {
  product: Product
  constructor(private productService: ProductService,
              
              private activateRoute: ActivatedRoute) {
                this.product={
                  _id: '',
                  name: '',
                  status: 0,
                  price: 0,
                  salePrice: 0,
                  description: '',
                  imageUrl: '',
                  // category: 0,
                  category: ''
                }
               }

  ngOnInit(): void {
    const idFromUrl = this.activateRoute.snapshot.params['_id']
    this.productService.getProduct(idFromUrl).subscribe(data => {
      this.product = data
      
    })
  }

}
