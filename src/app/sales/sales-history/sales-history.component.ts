import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import swal from 'sweetalert2';
import { SalesUrl } from '../sales-urls';
import { SalesData } from 'src/app/services/sales-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales-history',
  templateUrl: './sales-history.component.html',
  styleUrls: ['./sales-history.component.scss']
})
export class SalesHistoryComponent implements OnInit {

  title = "Sales History"
  data = [];
  displayForm = false;
  operation = "Add";
  obj = {};

  message:string;

  constructor(public http: HttpService, private salesData: SalesData, public _router: Router) { }

  ngOnInit() {

    swal.showLoading();
    this.http.get(SalesUrl.sales_urls.list)
      .subscribe(success => {
        this.data = success.data;
        swal.close();
      }, err => {
        console.log(err);
      }) 
  }

  callService(data)
  {
    this.salesData.changeMessage(data);
    
    //this._router.navigate(['/sales/sales-detail', data.id])
  }
}
