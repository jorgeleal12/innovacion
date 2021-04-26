import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { NgZorroAntdModule } from './antd.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoadingComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoadingComponent,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
