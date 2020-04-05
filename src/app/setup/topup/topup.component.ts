import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { dashboard_urls } from 'src/app/components/dashboard_urls';
import swal from 'sweetalert2';
import { setupUrls } from '../setup_urls';

@Component({
  selector: 'app-topup',
  templateUrl: './topup.component.html',
  styleUrls: ['./topup.component.scss']
})
export class TopupComponent implements OnInit {

  isStaff;
  isStartingDay;
  operation = "Top up Balance";
  IsOpen = 0;
  user_name = "";
  data = [];
  inUseBanks = [];


  obj = {
    order: { IsOpen: 0, CableTVAmount: 0.00, AEDCAmount: 0.00 },
    detail: [{ Balance: 0.0, BankID: null, IsOpen: 0 }]
  };


  constructor(public httpservice: HttpService, public _auth: AuthService, public router: Router) { }

  ngOnInit() {

    this.httpservice.get(dashboard_urls.isOpening.get)
    .subscribe(success => {
      console.log(success.data);
      this.isStaff = success.data.Role != 1 ? true : false;
      if (success.data.isDayStart == null || success.data.isDayStart == 0) {
        this.isStartingDay = true;
      } else if (success.data.isDayStart == 1) {
        this.isStartingDay = false;
        console.log(this.isStartingDay);
        this.operation = "What do you want to do Today?";
      }
      // this.isStartingDay = false;
      // this.isStartingDay = success.data.isDayStart != 1 ? true : false;
      this.IsOpen = this.isStartingDay ? 1 : 0;
      // console.log(this.isStartingDay);
      this.data = success.data;
      swal.close();
    }, err => {
      console.log(err);
    })

    swal.showLoading();
    this.httpservice.get(setupUrls.banks.listInUse)
      .subscribe(success => {
        this.inUseBanks = success.data;
        console.log(this.data);
        swal.close();
      }, err => {
        console.log(err);
      })
  }

  processForm() {
    this.obj.order.IsOpen = 0;
    console.log(this.obj)
    let url = setupUrls.staff.topup;
    console.log(url);
    this.save(url);
  }


  save(url) {

    if (!this.isStartingDay) {
      swal.showLoading();
      console.log(this.obj);
      this.httpservice.post(url, this.obj)
        .subscribe(success => {
          this.data = success.data;
          this.resetTransaction();

          console.log("Before Success Dialog Starting day")

          swal({ title: "Success", text: success.message, type: "success", allowOutsideClick: false }).then((value) => {
            this.ngOnInit();
          });
        }, err => {
          console.log(err);
          swal("Error", err.error.message, "error");
        })
    }

  }
  resetTransaction() {
    this.obj = {
      order: { IsOpen: 1, CableTVAmount: null, AEDCAmount: null },
      detail: [{ Balance: 0.0, BankID: null, IsOpen: 1 }]
    };  }

  addItem() {
    this.obj.detail.push({ Balance: 0.0, BankID: null, IsOpen: 0 });
  }
  removeItem(i) {
    if (this.obj.detail.length > 1)
      this.obj.detail.splice(i, 1);
  }

}
