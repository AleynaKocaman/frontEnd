import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/categoryService/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories :any;
  baseUrl="https://localhost:7134/api/category";
  cityId: any | undefined;

  constructor(private categoryService:CategoryService, private router:Router,
    private activetedRoute: ActivatedRoute) {};

  ngOnInit(): void {
    this.getAllCategory();
  }
  
  getAllCategory(){
    this.categoryService.getAllCategories()
    .then((data) => { this.categories = data; }) 
    .catch((error) => { console.error('HTTP İsteği Hatası:', error); }); 
  }

  *getPlacesForCategory(categoryId:number){
    this.cityId = this.activetedRoute.snapshot.paramMap.get("cityId");
    this.router.navigate(["place",this.cityId,"category",categoryId]);
  }

}


