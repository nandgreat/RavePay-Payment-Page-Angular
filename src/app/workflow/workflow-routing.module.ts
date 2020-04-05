import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApprovalInstancesComponent } from './approval-instances/approval-instances.component';
import { ApprovalLimitComponent } from './approval-limit/approval-limit.component';
import { ApprovalProcessFlowComponent } from './approval-process-flow/approval-process-flow.component';
import { ApprovalProcessModulesComponent } from './approval-process-modules/approval-process-modules.component';
import { ApprovalProcessTypesComponent } from './approval-process-types/approval-process-types.component';
import { ApprovalStageComponent } from './approval-stage/approval-stage.component';
import { ApprovalTypeComponent } from './approval-type/approval-type.component';
import { ApprovalFormComponent } from './approval-form/approval-form.component';
import { ApprovalSuccessComponent } from './approval-success/approval-success.component';

const routes: Routes = [

{path: "instances", component: ApprovalInstancesComponent},
{path: "limit", component:ApprovalLimitComponent},
{path: "flow",component:ApprovalProcessFlowComponent},
{path: "modules",component:ApprovalProcessModulesComponent},
{path: "processtypes",component:ApprovalProcessTypesComponent},
{path: "stage",component:ApprovalStageComponent},
{path: "type",component:ApprovalTypeComponent},
{path: "treat/:id/:type", component: ApprovalFormComponent},
{path: "approval-success/:id/:type", component: ApprovalSuccessComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkflowRoutingModule { }
