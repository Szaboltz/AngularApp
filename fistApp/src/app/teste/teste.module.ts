import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TesteRoutingModule } from './teste-routing.module';
import { TesteComponent } from './teste.component';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [TesteComponent],
  imports: [
    CommonModule,
    TesteRoutingModule,
    MaterialModule
  ]
})
export class TesteModule { }
