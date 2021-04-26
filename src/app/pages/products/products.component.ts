import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '@moduleshared/service/notification.service';
import { BehaviorSubject } from 'rxjs';
import { ProductsService } from 'src/app/service/products.service';
import { Products } from '../../model/products';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  FormProducts: FormGroup;
  listProducts;
  listProducts1 = [{}];
  listCategories;
  products = new BehaviorSubject<Products[]>([]);
  products$ = this.products.asObservable();

  numberPattern: string = '^-?[0-9]\\d*(\\.\\d{1,2})?$';
  letters:string='^[a-zA-Z ]+$';
  letters_number:string='^[a-zA-Z0-9 ]+$';
  

  constructor(private fb: FormBuilder, private productsService: ProductsService, private notificationService: NotificationService) {
    this.FormProducts = this.fb.group({
      id: [null],
      codigo: [{ value: null, disabled: true }, [Validators.required]],
      estado: [null, [Validators.required]],
      precio: [null, [Validators.required, Validators.pattern(this.numberPattern)]],
      producto: [null, [Validators.required,Validators.pattern(this.letters)]],
      descripcion: [null, [Validators.required,Validators.pattern(this.letters_number)]],
      idCategoria: [null, [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.FindAllProducts();
    this.FindAllCategory();
  }

  FindAllCategory() {
    this.productsService.FindAllCategory().subscribe(res => {
      this.listCategories = res;
    }, err => {
    })
  }

  FindAllProducts() {
    this.listProducts = this.productsService.FindAllProducts().subscribe(res => {
      this.listProducts = res;
      this.products.next(this.listProducts)
    }, err => {
    })
  }

  edit(data) {
    this.FormProducts.patchValue(data);
  }

  save() {
    if (this.FormProducts.value.id) {
      this.update();
    } else {
      this.create();
    }
  }

  create() {
    this.FormProducts.get('codigo').setValue(uuid())
    this.listProducts = [...this.listProducts, this.FormProducts.getRawValue()];
    this.products.next(this.listProducts)
    this.productsService.CreateProducts(this.FormProducts.getRawValue()).subscribe(res => {
      this.FormProducts.get('id').setValue(res.id)
      this.notificationService.NotificationSuccess()
    }, err => {
      this.notificationService.NotificationError()
    })
  }

  update() {
    const res = this.listProducts.findIndex(p =>
      p.id === this.FormProducts.value.id
    )
    this.listProducts[res] = this.FormProducts.getRawValue();
    this.products.next(this.listProducts);
    this.productsService.UpdateProducts(this.FormProducts.value).subscribe(res => {
      this.notificationService.NotificationUpdate()
    }, err => {

    })
  }

  delete(product) {
    const delete_product = this.listProducts.findIndex(p => p.id === product.id);
    this.listProducts.splice(delete_product, 1);
    this.products.next(this.listProducts);
    this.productsService.DeleteProducts(product.id).subscribe(res => {
      this.notificationService.NotificationDelete();
    }, err => {

    })
  }

  clear() {
    this.FormProducts.reset()
  }

}
