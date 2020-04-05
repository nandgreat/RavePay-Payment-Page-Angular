import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent} from './menu/menu.component';
import { MenuAuthorizedComponent} from './menu-authorized/menu-authorized.component';
import { MenuTypeComponent} from './menu-type/menu-type.component';
import { PriviledgeComponent} from './priviledge/priviledge.component';
import { PriviledgeActivityComponent} from './priviledge-activity/priviledge-activity.component';
import { PriviledgeActivityMappingComponent} from './priviledge-activity-mapping/priviledge-activity-mapping.component';
import { PriviledgeAssignmentComponent} from './priviledge-assignment/priviledge-assignment.component';
import { PriviledgeClassComponent } from "./priviledge-class/priviledge-class.component";


const routes: Routes = [
  {path: "menu", component: MenuComponent},
  {path: "menuauthorized", component: MenuAuthorizedComponent},
  {path: "menutype", component: MenuTypeComponent},
  {path: "privilege", component: PriviledgeComponent},
  {path: "", component: PriviledgeComponent},
  {path: "activity", component: PriviledgeActivityComponent},
  {path: "activitymap", component: PriviledgeActivityMappingComponent},
  {path: "assignment", component: PriviledgeAssignmentComponent},
  {path: "class", component: PriviledgeClassComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriviledgeRoutingModule { }
