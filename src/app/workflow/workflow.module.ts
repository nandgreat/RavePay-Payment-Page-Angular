import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkflowRoutingModule } from './workflow-routing.module';
import { ApprovalTypeComponent } from './approval-type/approval-type.component';
import { ApprovalStageComponent } from './approval-stage/approval-stage.component';
import { ApprovalProcessModulesComponent } from './approval-process-modules/approval-process-modules.component';
import { ApprovalProcessTypesComponent } from './approval-process-types/approval-process-types.component';
import { ApprovalProcessFlowComponent } from './approval-process-flow/approval-process-flow.component';
import { ApprovalLimitComponent } from './approval-limit/approval-limit.component';
import { ApprovalInstancesComponent } from './approval-instances/approval-instances.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../shared.module';
import { ApprovalFormComponent } from './approval-form/approval-form.component';
import { ApprovalSuccessComponent } from './approval-success/approval-success.component';

@NgModule({
  imports: [
    CommonModule,
    WorkflowRoutingModule,
    FormsModule,
    NgSelectModule,
    SharedModule,
  ],
  declarations: [ApprovalTypeComponent, ApprovalStageComponent,   ApprovalProcessModulesComponent, ApprovalProcessTypesComponent, ApprovalProcessFlowComponent, ApprovalLimitComponent, ApprovalInstancesComponent, ApprovalFormComponent, ApprovalSuccessComponent]
})
export class WorkflowModule { }
