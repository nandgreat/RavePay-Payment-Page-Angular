import { Component } from '@angular/core';
import { DynamicComponent } from './dynamic-content';

@Component({
  selector: 'unknown-component',
  template: `<div>Unknown component ({{data?.text}})</div>`
})

export class UnknownDynamicComponent extends DynamicComponent{}