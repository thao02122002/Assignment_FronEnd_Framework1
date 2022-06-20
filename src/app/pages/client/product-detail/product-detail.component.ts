import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  cartItemValue: number = 1;
  constructor(private productService: ProductService,
              
    private activateRoute: ActivatedRoute,
    private lsService: LocalStorageService) { 
      this.product={
        _id: '',
        name: '',
        status: 0,
        price: 0,
        salePrice: 0,
        description: '',
        imageUrl: '',
        category:''
        // category: 0
      }
    }

  ngOnInit(): void {
    const idFromUrl = this.activateRoute.snapshot.params['_id']
    this.productService.getProduct(idFromUrl).subscribe(data => {
      this.product = data
      
    })
  }
  onInputValueChange(event: any) {
    this.cartItemValue = event.target.value;
  }

  onAddToCart() {
    //1 định nghĩa cấu trúc dữ liệu thêm vào giỏ
    const addItem = {
      _id: this.product._id,
      name: this.product.name,
      price: this.product.price,
  salePrice: this.product.salePrice,
  description: this.product.description,
  imageUrl: this.product.imageUrl,
      value: +this.cartItemValue
    }

    this.lsService.setItem(addItem)
  //5. cập nhật lại giá trị cho ô input

    this.cartItemValue =1
  }

}
