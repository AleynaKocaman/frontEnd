import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Place } from 'src/app/models/place';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private apiUrl="https://localhost:7134/api/city/getall";
  baseUrl="https://localhost:7134/api/";
  
  constructor(private httpClient:HttpClient) { }
  
  getCityId(cityId:number):Promise<Place [] |undefined>{
    let newPath=this.baseUrl+"place/byCityIdOrCategoryId?cityId="+cityId
    return this.httpClient.get<any[]>(newPath).toPromise();
  }

  getCategoryId(categoryId:number,cityId:number):Promise<Place [] |undefined>{
    let newPath=this.baseUrl+"place/byCityIdOrCategoryId?cityId="+cityId+"&categoryId="+categoryId
    return this.httpClient.get<Place[]>(newPath).toPromise();
  }

}
