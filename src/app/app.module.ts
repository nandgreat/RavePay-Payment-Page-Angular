import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { HttpService } from './services/http.service';
import { GenericService } from './services/generic.service';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { MAT_STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { DynamicContentComponent } from './components/dynamic-content/dynamic-content.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExcelService } from './services/excel.service';
import { RavepaymentModule } from 'angular4-ravepayment';
import { PaymentPageComponent } from './payment/payment-page/payment-page.component';
import { UnknownDynamicComponent } from './components/dynamic-content/unknown';


@NgModule({
  declarations: [
    AppComponent,
    DashboardLayoutComponent,
    AuthLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    DashboardComponent,
    PaymentPageComponent,
    DynamicContentComponent,
    UnknownDynamicComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule,
    BrowserAnimationsModule,
    MatStepperModule,
    HttpModule,
    MatIconModule,
    FormsModule,
    RavepaymentModule
  ],
  providers: [HttpService, GenericService, ExcelService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    AuthService, AuthGuard,
    {
      provide: MAT_STEPPER_GLOBAL_OPTIONS,
      useValue: { /*displayDefaultIndicatorType: true,*/ showError: true }

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
