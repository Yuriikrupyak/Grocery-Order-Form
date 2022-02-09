import { Injectable } from '@angular/core';
import { FoodCategory } from './ens-shared/food-category'
import { foodCategoriesEnum } from './ens-shared/food-categories-enum'
import {Observable, of} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class FoodCategoriesService {

  constructor() { }
  // getCategories(): Array<FoodCategory>{
  //   return foodCategoriesEnum;
  // }
  getCategories(): Observable<FoodCategory[]> {
    const categories = of(foodCategoriesEnum);
    return categories;
  }
}
