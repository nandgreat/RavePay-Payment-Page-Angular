import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import swal from 'sweetalert2';
import { SalesUrl } from '../sales-urls';
import { ActivatedRoute } from '@angular/router';
import { SalesData } from 'src/app/services/sales-data.service';
import { SalesReceipt } from 'src/app/services/sales-receipt.service';

@Component({
  selector: 'app-sales-detail',
  templateUrl: './sales-detail.component.html',
  styleUrls: ['./sales-detail.component.scss']
})
export class SalesDetailComponent implements OnInit {

  message: string;
  receipt: any;
  title = "Sales Details";
  data = [];
  displayForm = false;
  operation = "Add";
  item = [];
  obj = {};
  subtotal = 0;

  constructor(public http: HttpService, public route: ActivatedRoute,
     public salesData: SalesData, public salesReceipt: SalesReceipt) { }

  ngOnInit() {
    let id = this.route.snapshot.params["id"];
    swal.showLoading();
    this.http.get(SalesUrl.sales_details.get + '/' + id)
      .subscribe(success => {
        this.data = success.data;
        console.log(this.data);
        swal.close();
      }, err => {
        console.log(err);
      });

    this.salesData.currentMessage.subscribe(message => this.message = message);

    console.log(this.message);
  }
}
