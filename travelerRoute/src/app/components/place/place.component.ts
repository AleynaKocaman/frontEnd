import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaceService } from 'src/app/services/placeService/place.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit{

  placesForCity :any ;
  cityId :any;
  categoryId:any;

  constructor(private placeService:PlaceService,
    private route:ActivatedRoute) {};
 
  //   ngOnInit(): void {
  //     this.cityId = this.route.snapshot.paramMap.get("cityId");
  //     this.categoryId = this.route.snapshot.paramMap.get("categoryId");
  //     if(this.categoryId==undefined){
  //       console.log("IF kısmı çalıştı")
  //       this.getPlacesForCity(this.cityId);
  //     }else{
        
  //       this.getPlacesForCategory(this.categoryId,this.cityId);
  //     }   
  // }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.cityId = params['cityId'];
      this.categoryId = params['categoryId'];

      if (this.categoryId) {
        this.getPlacesForCategory(this.categoryId, this.cityId);
        console.log(
          'getPlacesForCategory methodu çalıştı ',
          this.categoryId,
          this.cityId
        );
      } else {
        this.getPlacesForCity(this.cityId);
        console.log('getPlacesForCity methodu çalıştı ', this.cityId);
      }
    });
  }
  


  getPlacesForCity(cityId: number) {

     this.placeService.getCityId(cityId)
       .then((data) => {
         this.placesForCity = data; // place diziye atama işlemi
       })
       .catch((error) => { console.error('HTTP İsteği Hatası:', error);
       });
  }

  getPlacesForCategory(categoryId: number,cityId:number) {

    console.log("getPlacesForCategory methodu çalıştı");
    this.placeService.getCategoryId(categoryId,cityId)
      .then((data) => {
        this.placesForCity = data; // Yerleri diziye atıyoruz
        console.log(this.placesForCity);
        console.log(data);
      })
      .catch((error) => { console.error('HTTP İsteği Hatası:', error);
      });
 }


}
