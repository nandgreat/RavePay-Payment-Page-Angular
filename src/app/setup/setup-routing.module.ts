import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BanksComponent } from './banks/banks.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { TransactionSummaryComponent } from './transaction-summary/transaction-summary.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { StaffComponent } from './staff/staff.component';
import { TopupComponent } from './topup/topup.component';
import { TransactionChargesComponent } from './transaction-charges/transaction-charges.component';
import { TodaySummaryComponent } from './today-summary/today-summary.component';
import { CashCollectedComponent } from './cash-collected/cash-collected.component';
import { CashCollectedHistoryComponent } from './cash-collected-history/cash-collected-history.component';

const routes: Routes = [
  {path: "banks", component: BanksComponent},
  {path: "transaction-history", component: TransactionHistoryComponent},
  {path: "transaction-summary", component: TransactionSummaryComponent},
  {path: "transaction-detail/:id", component: TransactionDetailsComponent},
  {path: "staff", component: StaffComponent},
  {path: "topup", component: TopupComponent},
  {path: "charges", component: TransactionChargesComponent},
  {path: "today-summary", component: TodaySummaryComponent},
  {path: "cash-collected", component: CashCollectedComponent},
  {path: "cash-collected-history", component: CashCollectedHistoryComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule { }
