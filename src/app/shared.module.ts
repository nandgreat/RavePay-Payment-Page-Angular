import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeysPipe } from './pipes/keys.pipe';
import { Jsonpipe } from './pipes/jsonpipe.pipe';
import { EscapeHtmlPipe } from './pipes/escape-html.pipe';
import { StaffStatusPipe } from './pipes/staffstatus.pipe';
import { YesNoPipe } from './pipes/YesNo.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    KeysPipe,
    Jsonpipe,
    EscapeHtmlPipe, StaffStatusPipe, YesNoPipe,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  entryComponents:[],
  exports: [
    KeysPipe, Jsonpipe, EscapeHtmlPipe, StaffStatusPipe, YesNoPipe,
  ]
})
export class SharedModule { }
