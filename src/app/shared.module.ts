import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeysPipe } from './pipes/keys.pipe';
import { Jsonpipe } from './pipes/jsonpipe.pipe';
import { EscapeHtmlPipe } from './pipes/escape-html.pipe';
import { StaffStatusPipe } from './pipes/staffstatus.pipe';
import { YesNoPipe } from './pipes/YesNo.pipe';
import { DynamicContentComponent } from './components/dynamic-content/dynamic-content.component';
import { UnknownDynamicComponent } from './components/dynamic-content/unknown';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    KeysPipe,
    Jsonpipe,
    EscapeHtmlPipe, StaffStatusPipe, YesNoPipe, DynamicContentComponent, UnknownDynamicComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  entryComponents:[UnknownDynamicComponent],
  exports: [
    KeysPipe, Jsonpipe, EscapeHtmlPipe, StaffStatusPipe, YesNoPipe, DynamicContentComponent, UnknownDynamicComponent
  ]
})
export class SharedModule { }
