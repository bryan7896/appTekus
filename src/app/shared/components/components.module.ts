import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { DescriptionTableComponent } from './description-table/description-table.component';
import { HomeTableComponent } from './home-table/home-table.component';



@NgModule({
  declarations: [
    PaginationComponent,
    DescriptionTableComponent,
    HomeTableComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PaginationComponent,
    DescriptionTableComponent,
    HomeTableComponent
  ]
})
export class ComponentsModule { }
