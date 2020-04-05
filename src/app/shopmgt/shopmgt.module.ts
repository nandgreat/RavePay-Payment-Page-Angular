import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopmgtRoutingModule } from './shopmgt-routing.module';

import { FormsModule } from '@angular/forms';
import { MatStepperModule, MatIconModule } from '@angular/material';

import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    ShopmgtRoutingModule,
    FormsModule,
    MatStepperModule,
    MatIconModule,
    NgSelectModule
  ],
  declarations: [ ]
})
export class ShopmgtModule { }
