import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
products: Product[]
  constructor(private productService: ProductService,
    private activateRoute: ActivatedRoute) { 
      this.products =[]
    
  }

  ngOnInit(): void {
    this.onGetList()
  }
  onGetList() {
    const idForm = this.activateRoute.snapshot.params['_id'];
    this.productService.getProductByCate(idForm).subscribe((data) => {
      // this.products = data
      console.log(data);
      
    })
  }

}
