import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { MatStepperModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SalesHistoryComponent } from './sales-history/sales-history.component';
import { SalesDetailComponent } from './sales-detail/sales-detail.component';
import { SalesReceiptComponent } from './sales-receipt/sales-receipt.component';

@NgModule({
  imports: [
    CommonModule,
    SalesRoutingModule,
    FormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatStepperModule, MatDatepickerModule,
    NgSelectModule,
  ],
  exports: [ MatDatepickerModule, MatFormFieldModule, MatNativeDateModule ],
  providers: [MatDatepickerModule],
  declarations: [SalesHistoryComponent, SalesDetailComponent, SalesReceiptComponent]
})
export class SalesModule { }
