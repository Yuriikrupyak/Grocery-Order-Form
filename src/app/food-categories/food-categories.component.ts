import {Component, OnInit} from '@angular/core';
import {FoodCategoriesService} from "../food-categories.service";
import {FoodCategory} from '../ens-shared/food-category';
import {Drinks, Fruits, Seeds, VeganFood, Vegetables} from "../ens-shared/category-items";
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import data from '../ens-shared/items-of-categories.json';
import {Unit} from "../ens-shared/unit";
@Component({
  selector: 'gos-food-categories',
  templateUrl: './food-categories.component.html',
  styleUrls: ['./food-categories.component.scss']
})
export class FoodCategoriesComponent implements OnInit {
  categoryNameColor = 'color: #369;'
  foodUnitsForm!: FormGroup;

  foodCategories: FoodCategory [] = [];
  selectedCategory?: FoodCategory;
  selectedCategoryUnit?: Unit [] = [];


  constructor(private foodCategoriesService: FoodCategoriesService, private fb: FormBuilder) {
    // this.fruits = Fruits;
    // this.vegetables = Vegetables;
    // this.veganFood = VeganFood;
    // this.drinks = Drinks;
    // this.seeds = Seeds;
  }

  ngOnInit(): void {
    this.getCategories();
    this.foodUnitsForm = this.fb.group({
      // fruits: [null],
      // vegetables: [null],
      // veganFood: [null],
      // drinks: [null],
      // seeds: [null]
    })
  }

  onSelect(category: FoodCategory): void {
    this.selectedCategory = category;

  }

  getCategories(): void {
    this.foodCategoriesService.getCategories()
      .subscribe(foodCategories => this.foodCategories = foodCategories);
  }
  getCategoryUnits(name: string) {
    return  this.foodCategoriesService.getCategoryUnits(name);

  }

  onSubmit() {
    console.log("Form Submitted")
    console.log(this.foodUnitsForm.value)
  }

  // onCheckboxChange(e) {
  //   const unit: FormArray = this.foodUnitsForm.get('unit') as FormArray;
  //   if (e.target.checked) {
  //     unit.push(new FormControl(e.target.value));
  //   } else {
  //     const index = unit.controls.findIndex(x => x.value === e.target.value);
  //     unit.removeAt(index);
  //   }
  // }

}
