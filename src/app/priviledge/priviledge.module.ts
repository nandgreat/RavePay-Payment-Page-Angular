import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriviledgeRoutingModule } from './priviledge-routing.module';
import { MenuComponent } from './menu/menu.component';
import { PriviledgeActivityMappingComponent } from './priviledge-activity-mapping/priviledge-activity-mapping.component';
import { PriviledgeActivityComponent } from './priviledge-activity/priviledge-activity.component';
import { PriviledgeAssignmentComponent } from './priviledge-assignment/priviledge-assignment.component';
import { PriviledgeClassComponent } from './priviledge-class/priviledge-class.component';
import { MenuAuthorizedComponent } from './menu-authorized/menu-authorized.component';
import { MenuTypeComponent } from './menu-type/menu-type.component';
import { PriviledgeComponent } from './priviledge/priviledge.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared.module';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    PriviledgeRoutingModule,
    FormsModule,
    SharedModule,
    NgSelectModule
    
  ],
  declarations: [MenuComponent, PriviledgeActivityMappingComponent, PriviledgeActivityComponent, PriviledgeAssignmentComponent, PriviledgeClassComponent, MenuAuthorizedComponent, MenuTypeComponent, PriviledgeComponent]
})
export class PriviledgeModule { }
