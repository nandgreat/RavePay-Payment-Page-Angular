import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetupRoutingModule } from './setup-routing.module';
import { BanksComponent } from './banks/banks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule, MatIconModule } from '@angular/material';
import { NgSelectModule } from '@ng-select/ng-select';
import { YesNoPipe } from '../pipes/YesNo.pipe';
import { SharedModule } from '../shared.module';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { TransactionSummaryComponent } from './transaction-summary/transaction-summary.component';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { StaffComponent } from './staff/staff.component';
import { TopupComponent } from './topup/topup.component';
import { TransactionChargesComponent } from './transaction-charges/transaction-charges.component';
import { TodaySummaryComponent } from './today-summary/today-summary.component';
import { CashCollectedComponent } from './cash-collected/cash-collected.component';
import { CashCollectedHistoryComponent } from './cash-collected-history/cash-collected-history.component';
import { StaffStatusPipe } from '../pipes/staffstatus.pipe';
import { ChargeMethod } from '../pipes/chargemethod.pipe';
// import { JwPaginationComponent } from 'jw-angular-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  imports: [
    CommonModule,
    SetupRoutingModule,
    FormsModule,
    MatStepperModule,
    Ng2SearchPipeModule,
    MatIconModule,
    ReactiveFormsModule,
    NgSelectModule,
    SharedModule
  ],
  declarations: [
    BanksComponent,
    StaffComponent,
    TransactionHistoryComponent,
    TransactionSummaryComponent,
    JwPaginationComponent, TransactionDetailsComponent,
    TopupComponent,
    TransactionChargesComponent,
    TodaySummaryComponent,
    CashCollectedComponent,
    ChargeMethod,
    CashCollectedHistoryComponent
  ],
  exports: [YesNoPipe, StaffStatusPipe]
})
export class SetupModule { }
