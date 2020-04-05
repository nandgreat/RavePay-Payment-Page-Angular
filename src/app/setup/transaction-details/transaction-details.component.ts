import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute } from '@angular/router';
import { setupUrls } from '../setup_urls';
import swal from 'sweetalert2';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss']
})
export class TransactionDetailsComponent implements OnInit {

  data = [];
  title = "Transaction Detials"
  operation = "View";

  allDates =[];

  constructor(public http: HttpService, public route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params["id"];
    swal.showLoading();
    console.log("This is the Id "+id);
    this.http.get(setupUrls.staff.get + '/' + id)
      .subscribe(success => {
        this.data = success.data;
        console.log(this.data);
        swal.close();
      }, err => {
        console.log(err);
      });
    this.http.get(setupUrls.staff.getDates)
      .subscribe(success => {
        this.allDates = success.data;
        console.log(this.data);
        swal.close();
      }, err => {
        console.log(err);
      });



  }

}
