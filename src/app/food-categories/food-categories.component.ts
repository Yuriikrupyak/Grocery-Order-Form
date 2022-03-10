import {Component, OnInit} from '@angular/core';
import {FoodCategoriesService} from "../food-categories.service";
import {FoodCategory} from '../ens-shared/food-category';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
    this.foodUnitsForm = this.fb.group({
      unit: this.fb.array([], [Validators.required])
    })
  }

  ngOnInit(): void {
    this.getCategories();
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

  onCheckboxChange(e: any) {
    const unit: FormArray = this.foodUnitsForm.get('unit') as FormArray;
    if (e.target.checked) {
      unit.push(new FormControl(e.target.value));
    } else {
      const index = unit.controls.findIndex(u => u.value === e.target.value);
      unit.removeAt(index);
    }
  }

}
