import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PaymentPageComponent } from './payment/payment-page/payment-page.component';

const routes: Routes = [
  {
    path: "", component: DashboardLayoutComponent, //canActivate: [AuthGuard],
    children: [
      { path: "payment", loadChildren: './payment/payment.module#PaymentModule'},
      { path: "", component: DashboardComponent },

    ]
  },
  {
    path: "", component: AuthLayoutComponent,
    children: [
      { path: "payment-page/:reference", component: PaymentPageComponent },
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
