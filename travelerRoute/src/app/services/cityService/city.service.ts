import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from 'src/app/models/city';
import { Place } from 'src/app/models/place';


@Injectable({
  providedIn: 'root'
})
export class CityService {

  private apiUrl="https://localhost:7134/api/city/getall";
  baseUrl="https://localhost:7134/api/";
  
  constructor(private httpClient:HttpClient) { }
  
  getAllCities(): Promise<any[] | undefined> {
    return this.httpClient.get<any[]>(`${this.baseUrl}city/getall`).toPromise();
  }

  getCityId(cityId:number):Promise<Place [] |undefined>{
    let newPath=this.baseUrl+"place/byCityIdOrCategoryId?cityId="+cityId
    return this.httpClient.get<any[]>(newPath).toPromise();
  }
  createUser(user: any): Promise<any> {
    let newPath=this.baseUrl+"/city"
    return this.httpClient.post<any>(newPath, user).toPromise();
  }
  deleteUser(id: number): Promise<any> {
    let newPath=this.baseUrl+"city"
    const url = `${newPath}/${id}`;
    return this.httpClient.delete(url).toPromise();
  }
  /*
  getCitiesAsPromise(): Promise<City[] |undefined> {
    return this.httpClient.get<City[]>(`${this.baseUrl}/getCities`).toPromise();
  }
  */

  /*
  getUserById(id: number): Promise<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.get<any>(url).toPromise();
  }



  updateUser(id: number, user: any): Promise<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.put<any>(url, user).toPromise();
  }


  */
   
}


