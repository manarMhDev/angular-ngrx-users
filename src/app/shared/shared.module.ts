import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from './components/pagination/pagination.component';
// import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
    imports: [ReactiveFormsModule , FormsModule,CommonModule,RouterModule],
    declarations: [ 
      HeaderComponent,
      PaginationComponent
      ],
    exports: [
      HeaderComponent,
      PaginationComponent],
  })
  export class ComponentsModule {}
