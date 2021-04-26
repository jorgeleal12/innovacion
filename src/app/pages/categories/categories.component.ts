import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '@moduleshared/service/notification.service';
import { BehaviorSubject } from 'rxjs';
import { CategoriesService } from 'src/app/service/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  types = [
    { id: 'A' },
    { id: 'B' },
    { id: 'C' },
    { id: 'D' },
    { id: 'E' },
    { id: 'F' },
    { id: 'G' },
    { id: 'H' },
    { id: 'I' },
    { id: 'J' },
    { id: 'K' },
    { id: 'L' },
    { id: 'M' },
    { id: 'N' },
    { id: 'O' },
    { id: 'P' },
    { id: 'Q' },
    { id: 'R' },
    { id: 'S' },
    { id: 'T' },
    { id: 'U' },
    { id: 'V' },
    { id: 'W' },
    { id: 'X' },
    { id: 'Y' },
    { id: 'Z' },
  ];
  listcategories1 = [{}]
  listcategories;
  categories = new BehaviorSubject<any[]>([]);
  categories$ = this.categories.asObservable();
  letters: string = '^[a-zA-Z ]+$';
  FormCategories: FormGroup;
  @Input() idCategoria: any
  index;
  @Output() ini = new EventEmitter<any>()

  constructor(private fb: FormBuilder, private categoriesService: CategoriesService, private notificationService: NotificationService) {
    this.FormCategories = this.fb.group({
      id: [{ value: null, disabled: true }],
      nombre: [null, [Validators.required, Validators.pattern(this.letters)]],
      tipo: [null, [Validators.required]]
    })

  }

  ngOnInit(): void {
    this.FindAllCategories();
    if (!this.idCategoria) {
      this.FindOneCategory();
    }
  }
  FindOneCategory() {
    this.categoriesService.FindOneCategory(this.idCategoria).subscribe(res => {
      this.FormCategories.patchValue(res);
    }, err => {

    })
  }

  FindAllCategories() {
    this.categoriesService.FindAllCategories().subscribe(res => {
      this.listcategories = res;
      this.categories.next(this.listcategories);
    }, err => {

    })
  }

  edit(category) {
    this.FormCategories.patchValue(category);
  }

  delete(category) {
    const delete_category = this.listcategories.findIndex(c => c.id === category.id);
    this.listcategories.splice(delete_category, 1);
    this.categories.next(this.listcategories);
    this.categoriesService.DeleteCategory(category.id).subscribe(res => {
      this.notificationService.NotificationDelete();
    }, err => {

    })
  }

  save() {
    if (this.FormCategories.getRawValue().id != null) {
      this.update();
    } else {
      this.create();
    }
  }

  create() {
    this.categoriesService.CreateCategory(this.FormCategories.getRawValue()).subscribe(res => {
      this.FormCategories.get('id').setValue(res.id)
      this.listcategories = [...this.listcategories, res];
      this.categories.next(this.listcategories);
      this.notificationService.NotificationSuccess()
    }, err => {

    })
  }

  update() {
    const res = this.listcategories.findIndex(c =>
      c.id === this.FormCategories.getRawValue().id
    )
    this.listcategories[res] = this.FormCategories.getRawValue();
    this.categories.next(this.listcategories);
    this.categoriesService.UpdateCategory(this.FormCategories.getRawValue()).subscribe(res => {
      this.notificationService.NotificationUpdate(); 
      if (this.idCategoria != null) {
        this.index = 0;
        this.ini.emit(this.index)
      }
    }, err => {

    })
  }

  clear() {
    this.FormCategories.reset();
  }
}
