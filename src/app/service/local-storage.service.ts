import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProductCart } from '../types/Product';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
[x : string]:any;
  constructor() { }
  private serviceSubject = new Subject<string>()
  watchService(): Observable<any> {
    return this.serviceSubject.asObservable()
  }
getItems() {
 return JSON.parse(localStorage.getItem('cart') || '[]')
}

  setItem(addItem: ProductCart) {
    //1. cập nhật dữ liệu vào local
    //2kiểm tra xem đã có sp này trong giỏ chưa
    //2.1 lấy ra toàn bộ sp trong giỏ
    const cartItemt = this.getItems()
  //2.2 tìm phần tử trong giỏ có id === idItem
  const existItem = cartItemt.find((item: ProductCart) => item._id === addItem._id)
 // 3. nếu k có thì push luôn vào làm phần tử
 if(!existItem) {
   cartItemt.push(addItem)
 } else {
   // 3.1 nếu đã có thì cập nhật số lượng mới
   existItem.value += addItem.value
 }
  // cập nhật dữ liệu giỏ hàng
  localStorage.setItem('cart', JSON.stringify(cartItemt))
    //2. phát tín hiệu để lắng nghe bên watchService
    this.serviceSubject.next('')
  }
}
