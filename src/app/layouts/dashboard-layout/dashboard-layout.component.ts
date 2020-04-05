import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    document.body.className ="hold-transition skin-green sidebar-mini";
    document.body.className ="hold-transition skin-green sidebar-mini";
  }

  ngOnDestroy() {
    document.body.className ="";
  }

}
