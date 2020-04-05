import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MenuAuthorizationComponent } from './menu-authorization/menu-authorization.component';

const routes: Routes = [
  {path:"menu" , component: MenuComponent},
  {path:"menu-authorization" , component: MenuAuthorizationComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
