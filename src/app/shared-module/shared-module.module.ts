import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule, MatStepperModule } from '@angular/material';
import { SharedRoutingModule } from './shared-module-routing-module';
import { NgSelectModule } from '@ng-select/ng-select';
import { MenuAuthorizationComponent } from './menu-authorization/menu-authorization.component';
import { SharedModule } from '../shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatStepperModule,
    SharedRoutingModule,
    NgSelectModule,
    SharedModule
  ],
  declarations: [MenuComponent, MenuAuthorizationComponent],
  
})
export class SharedModuleModule { }
