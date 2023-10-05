import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityComponent } from './components/city/city.component';
import { PlaceComponent } from './components/place/place.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  {path:"",pathMatch:"full",component:CityComponent},
  {path:"city",component:CityComponent},
  {path:"about",component:AboutComponent},
  { path: 'place/:cityId', component: PlaceComponent },
  { path: 'place/:cityId/category/:categoryId', component: PlaceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

  // { path: 'place/:cityId', component: PlaceComponent,children:[
  //   { path: 'category/:categoryId', component: PlaceComponent }
  // ]},