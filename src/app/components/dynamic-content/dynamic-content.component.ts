import { Component, OnInit, OnDestroy, ViewContainerRef,ViewChild, Input, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { DynamicComponent } from './dynamic-content';
import { UnknownDynamicComponent } from './unknown';

@Component({
  selector: 'dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.scss']
})
export class DynamicContentComponent implements OnInit , OnDestroy {

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  @Input()
  type: string;

  @Input()
  data: any;

  private mappings = {
    //   'voucher': VoucherTemplateComponent,
    //   'withdrawal': WithdrawalTemplateComponent 
      // 'invoice': DynamicSample2Component,
      // 'journal': DynamicSample2Component,
      // 'account': DynamicSample2Component,
      // 'dividend': DynamicSample2Component,
  };

  private componentRef: ComponentRef<{}>;

  constructor(
      private componentFactoryResolver: ComponentFactoryResolver) {
  }

  getComponentType(typeName: string) {
      let type = this.mappings[typeName];
      return type || UnknownDynamicComponent;
  }

  ngOnInit() {
      if (this.type) {
          let componentType = this.getComponentType(this.type);
          
          // note: componentType must be declared within module.entryComponents
          let factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
          this.componentRef = this.container.createComponent(factory);

          // set component context
          let instance = <DynamicComponent> this.componentRef.instance;
          instance.data = this.data;
      }
  }

  ngOnDestroy() {
      if (this.componentRef) {
          this.componentRef.destroy();
          this.componentRef = null;
      }
  }
}

