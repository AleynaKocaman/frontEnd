import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl="https://localhost:7134/api/city/getall";
  baseUrl="https://localhost:7134/api/";
  constructor(private httpClient:HttpClient) { }

  getAllCategories(): Promise<any[] | undefined> {
    return this.httpClient.get<any[]>(`${this.baseUrl}category`).toPromise();
  }

  // getCategoryId(categoryId:number,cityId:number):Promise<any [] |undefined>{
  //   let newPath=this.baseUrl+"place/byCityIdOrCategoryId?cityId="+cityId+"&categoryId="+categoryId
  //   return this.httpClient.get<any[]>(newPath).toPromise();
  // }


}
