import { Component, Input, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CityService } from 'src/app/services/cityService/city.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

   cities: any;
   placesForCity :any ;
 
   
  constructor(private cityService:CityService, private router:Router) {};

  ngOnInit(): void {
    this.getCities();
    
  }

  getCities(){
    this.cityService.getAllCities()
    .then((data) => { this.cities = data; }) 
    .catch((error) => { console.error('HTTP İsteği Hatası:', error); }); 
  }
  

   getPlacesForCity(cityId: number) {
    this.router.navigate(["place/",cityId]);
  }


/*
  getPlacesForCity(cityId: City) {
    //this.router.navigate(['/place', cityId.id]);
     this.cityService.getCityId(cityId.id)
       .then((data) => {
         this.placesForCity = data; // Yerleri diziye atıyoruz
       })
       .catch((error) => { console.error('HTTP İsteği Hatası:', error); });
  }
  */


  /*
  getCity(): void {
    this.cityService.getCitiesAsPromise().then(
      data => {
        this.cities = data;
      },
      error => {
        console.error(error);
      }
    );
  }
  */

}
