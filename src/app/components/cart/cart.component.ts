import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { ProductCart } from 'src/app/types/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartItemt: ProductCart[] = [];
cartItemValues: number = 0
  constructor(
    private lsService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.onSetCartItems()

    this.lsService.watchService().subscribe(data => {
      // khi serviceSubject
      this.onSetCartItems()


    })
  }
  onSetCartItems() {
    this.cartItemt = this.lsService.getItems()
    this.cartItemValues = 0;
    this.cartItemt.forEach(item => {
      this.cartItemValues += item.value
    })
  }

}
