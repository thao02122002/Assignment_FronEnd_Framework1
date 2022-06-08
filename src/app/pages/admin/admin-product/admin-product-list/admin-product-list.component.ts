import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {
  products: Product[]

  constructor(private productService: ProductService) {
    this.products = []
   }

  ngOnInit(): void {
   this.onGetList()
  }
  onGetList(){
    this.productService.getProducts().subscribe((data) => {
      this.products = data
    })
  }

  onDelete(_id: string) {
    //confirm
    // kiểm tra dữ liệu
    //cập nhật lại danh sách
    const comfirmDelete = confirm('Bạn có chắc chăn smuoons xóa hay k')
    if(comfirmDelete && _id){
      this.productService.deleteProduct(_id).subscribe((data) => {
        this.onGetList()
      })
    }
  }

  onUpdateStatus(productId: string, newStatus: number) {
    this.productService.updateProduct(productId,{status: newStatus}).subscribe(data => {
      this.onGetList()
    })
  }

}
