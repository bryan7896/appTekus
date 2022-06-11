import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { DescriptionTableComponent } from './description-table/description-table.component';
import { HomeTableComponent } from './home-table/home-table.component';
import { DateFormatComponent } from './date-format/date-format.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PaginationComponent,
    DescriptionTableComponent,
    HomeTableComponent,
    DateFormatComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    PaginationComponent,
    DescriptionTableComponent,
    HomeTableComponent,
    DateFormatComponent
  ]
})
export class ComponentsModule { }
