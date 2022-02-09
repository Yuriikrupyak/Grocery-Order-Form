import { Injectable } from '@angular/core';
import { FoodCategory } from './ens-shared/food-category'
import { foodCategoriesEnum } from './ens-shared/food-categories-enum'
import { Observable, of } from "rxjs";
import { Unit } from "./ens-shared/unit";
import unitsData from './ens-shared/items-of-categories.json';
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
  getCategoryUnits(name:string): Unit[] {
    const typedUnitData = unitsData as any;
    const units = typedUnitData[name] as Unit[];
    return units;
  }
}
