import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { DescriptionComponent } from './description/description.component';
import { ModulesRoutingModule } from './modules-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    DescriptionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ModulesRoutingModule
  ]
})
export class ModulesModule { }
