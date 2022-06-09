import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/types/Category';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})
export class AdminCategoryListComponent implements OnInit {
categories: Category[]
  constructor(private categoryService: CategoryService ) { 
    this.categories = []
  }

  ngOnInit(): void {
    this.onGetList()
  }
  onGetList(){
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data
    })
  }

  onUpdateStatus(categoryId: string, newStatus: number) {
    this.categoryService.updateCategory(categoryId,{status: newStatus}).subscribe(data => {
      this.onGetList()
    })
  }

}
