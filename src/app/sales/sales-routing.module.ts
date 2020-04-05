import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesHistoryComponent } from './sales-history/sales-history.component';
import { SalesDetailComponent } from './sales-detail/sales-detail.component';
import { SalesReceiptComponent } from './sales-receipt/sales-receipt.component';

const routes: Routes = [
  { path: "sales-history", component: SalesHistoryComponent },
  { path: "sales-receipt", component: SalesReceiptComponent },
  { path: "sales-detail/:id", component: SalesDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
